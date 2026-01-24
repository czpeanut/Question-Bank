import { 
  Document, Packer, Paragraph, TextRun, AlignmentType, ImageRun
} from 'docx';
import saveAs from 'file-saver';
import { Question } from '../types';

/**
 * 嚴格字元過濾：確保所有文字符合 XML 1.0 標準，防止 Word 損毀
 */
const sanitize = (text: string): string => {
  if (!text) return "";
  return text.replace(/[^\x09\x0A\x0D\x20-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]/g, "");
};

/**
 * LaTeX 轉 PNG
 * 維持高品質圖片生成與整數尺寸計算
 */
const latexToImage = async (formula: string): Promise<{ data: Uint8Array; width: number; height: number } | null> => {
  try {
    const mj = (window as any).MathJax;
    if (!mj || !mj.tex2svgPromise) return null;

    const container = await mj.tex2svgPromise(formula);
    const svgElement = container.querySelector('svg');
    if (!svgElement) return null;

    const viewBox = svgElement.viewBox.baseVal;
    const rawW = parseFloat(svgElement.getAttribute('width') || '0');
    const rawH = parseFloat(svgElement.getAttribute('height') || '0');
    
    // 設定適中的縮放比例
    const scale = 8.5; 
    const widthPx = rawW ? (rawW * scale) : (viewBox.width * 0.05);
    const heightPx = rawH ? (rawH * scale) : (viewBox.height * 0.05);

    const finalWidth = Math.max(1, Math.round(widthPx));
    const finalHeight = Math.max(1, Math.round(heightPx));

    const canvas = document.createElement('canvas');
    const dpr = 2; 
    canvas.width = finalWidth * dpr;
    canvas.height = finalHeight * dpr;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    const svgData = new XMLSerializer().serializeToString(svgElement);
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);
    const img = new Image();

    return new Promise((resolve) => {
      img.onload = () => {
        ctx.scale(dpr, dpr);
        ctx.drawImage(img, 0, 0, finalWidth, finalHeight);
        URL.revokeObjectURL(url);
        
        canvas.toBlob(async (blob) => {
          if (blob) {
            const arrayBuffer = await blob.arrayBuffer();
            resolve({ 
              data: new Uint8Array(arrayBuffer), 
              width: finalWidth, 
              height: finalHeight 
            });
          } else {
            resolve(null);
          }
        }, 'image/png');
      };
      img.onerror = () => {
        URL.revokeObjectURL(url);
        resolve(null);
      };
      img.src = url;
    });
  } catch (err) {
    console.error("MathJax 轉換失敗:", err);
    return null;
  }
};

/**
 * 解析混合內容：文字與圖片純粹依序排列
 */
const parseMixedContent = async (text: string): Promise<(TextRun | ImageRun)[]> => {
  if (!text) return [];
  const segments = text.split(/(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$)/g);
  const runs: (TextRun | ImageRun)[] = [];

  for (const seg of segments) {
    if (!seg) continue;
    if (seg.startsWith('$')) {
      const latex = seg.replace(/^\$\$?|\$\$?$/g, '').trim();
      const img = await latexToImage(latex);
      if (img) {
        runs.push(new ImageRun({
          data: img.data,
          transformation: { width: img.width, height: img.height },
          // @ts-ignore
          type: "png"
        }));
      } else {
        runs.push(new TextRun({ text: sanitize(seg), bold: true }));
      }
    } else {
      runs.push(new TextRun({ 
        text: sanitize(seg), 
        size: 24, 
        font: "微軟正黑體" 
      }));
    }
  }
  return runs;
};

export const generateDocx = async (questions: Question[], examTitle: string) => {
  const contentNodes: any[] = [];

  // 1. 標題
  contentNodes.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [new TextRun({ text: sanitize(examTitle), bold: true, size: 36, font: "微軟正黑體" })],
    spacing: { before: 400, after: 600 }
  }));

  // 2. 題目區段標題
  contentNodes.push(new Paragraph({
    children: [new TextRun({ text: "一、 題目部分", bold: true, size: 30, font: "微軟正黑體" })],
    spacing: { before: 200, after: 300 }
  }));

  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    const questionRuns = await parseMixedContent(q.question_content);
    
    // 題目內容（標準段落）
    contentNodes.push(new Paragraph({
      children: [
        new TextRun({ text: `${i + 1}. [${sanitize(q.knowledge_point)}] `, bold: true, size: 24, font: "微軟正黑體" }),
        ...questionRuns
      ],
      spacing: { before: 240, after: 120 }
    }));
    
    // 答題線
    contentNodes.push(new Paragraph({
      children: [new TextRun({ text: "   答：________________________________", size: 24, font: "微軟正黑體" })],
      spacing: { after: 400 }
    }));
  }

  // 3. 解析區段標題
  contentNodes.push(new Paragraph({
    children: [new TextRun({ text: "二、 解析部分", bold: true, size: 30, font: "微軟正黑體" })],
    spacing: { before: 800, after: 400 }
  }));

  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    const answerRuns = await parseMixedContent(q.answer);
    const solutionRuns = await parseMixedContent(q.solution);

    // 答案行
    contentNodes.push(new Paragraph({
      children: [
        new TextRun({ text: `${i + 1}. 【答案】`, bold: true, color: "C00000", size: 24, font: "微軟正黑體" }),
        ...answerRuns
      ],
      spacing: { before: 120 }
    }));
    
    // 解析行
    contentNodes.push(new Paragraph({
      children: [
        new TextRun({ text: "   【解析】", bold: true, color: "555555", size: 24, font: "微軟正黑體" }),
        ...solutionRuns
      ],
      spacing: { after: 240 }
    }));
  }

  const doc = new Document({
    sections: [{
      properties: {
        page: { margin: { top: 720, right: 720, bottom: 720, left: 720 } }
      },
      children: contentNodes
    }]
  });

  try {
    const blob = await Packer.toBlob(doc);
    saveAs(blob, `${sanitize(examTitle) || 'quiz'}.docx`);
  } catch (err) {
    console.error("生成失敗:", err);
    alert("導出失敗，請重試。");
  }
};
