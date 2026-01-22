
import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } from 'docx';
import saveAs from 'file-saver';
import { Question } from '../types';

export const generateDocx = async (questions: Question[], examTitle: string) => {
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            text: examTitle,
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.CENTER,
            spacing: { after: 400 },
          }),
          
          // Question Section Header
          new Paragraph({
            text: "一、 題目部分",
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 200, after: 200 },
          }),

          ...questions.flatMap((q, index) => [
            new Paragraph({
              children: [
                new TextRun({ text: `${index + 1}. [${q.knowledge_point} - ${q.question_type}] `, bold: true }),
                new TextRun({ text: q.question_content }),
              ],
              spacing: { before: 200, after: 100 },
            }),
            new Paragraph({
              text: "答：____________________",
              spacing: { after: 400 },
            })
          ]),

          // Page break or space
          new Paragraph({ text: "", spacing: { before: 400 } }),
          
          // Solution Section Header
          new Paragraph({
            text: "二、 解答與解析",
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 },
          }),

          ...questions.flatMap((q, index) => [
            new Paragraph({
              children: [
                new TextRun({ text: `${index + 1}. `, bold: true }),
                new TextRun({ text: `【答案】${q.answer}`, bold: true, color: "FF0000" }),
              ],
              spacing: { before: 100 },
            }),
            new Paragraph({
              children: [
                new TextRun({ text: `【解析】`, bold: true }),
                new TextRun({ text: q.solution }),
              ],
              spacing: { after: 200 },
            })
          ]),
        ],
      },
    ],
  });

  const blob = await Packer.toBlob(doc);
  saveAs(blob, `${examTitle}.docx`);
};
