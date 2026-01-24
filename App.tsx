import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { RAW_DATA, getQuestionTree } from './constants';
import { Question } from './types';
import { TreeSelector } from './components/TreeSelector';
import { FileDown, BookOpenCheck, Settings, LayoutGrid, Info, Loader2 } from 'lucide-react';
import { generateDocx } from './services/docxService';

const MathContent: React.FC<{ content: string; className?: string }> = ({ content, className }) => {
  const containerRef = React.useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (containerRef.current && (window as any).MathJax) {
      // 確保將 $$ 轉換為 $ 以避免 MathJax 在預覽時自動換行
      const safeContent = content.replace(/\$\$/g, '$');
      const htmlContent = safeContent.replace(/\n/g, '<br/>');
      containerRef.current.innerHTML = htmlContent;
      
      try {
        if ((window as any).MathJax.typesetPromise) {
          (window as any).MathJax.typesetPromise([containerRef.current]);
        }
      } catch (err) {
        console.error("MathJax 局部渲染失敗:", err);
      }
    }
  }, [content]);

  return <span ref={containerRef} className={`${className} tex2jax_process`} style={{ display: 'inline', verticalAlign: 'middle' }} />;
};

const App: React.FC = () => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [totalCount, setTotalCount] = useState<number>(10);
  const [examTitle, setExamTitle] = useState<string>("2024 高一數學隨堂測驗");
  const [generatedQuestions, setGeneratedQuestions] = useState<Question[]>([]);
  const [isExporting, setIsExporting] = useState(false);

  const tree = useMemo(() => getQuestionTree(RAW_DATA), []);

  const toggleType = useCallback((type: string) => {
    setSelectedTypes(prev => prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]);
  }, []);

  const clearSelection = () => {
    setSelectedTypes([]);
    setGeneratedQuestions([]);
  };

  const handleGenerate = () => {
    if (selectedTypes.length === 0) {
      alert("請選擇題型");
      return;
    }
    const pool = RAW_DATA.filter(q => selectedTypes.includes(q.question_type));
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    setGeneratedQuestions(shuffled.slice(0, totalCount));
  };

  const handleExport = async () => {
    if (generatedQuestions.length === 0 || isExporting) return;
    setIsExporting(true);
    
    try {
      if ((window as any).MathJax?.typesetPromise) {
        await (window as any).MathJax.typesetPromise();
      }
      await generateDocx(generatedQuestions, examTitle);
    } catch (err) {
      console.error(err);
      alert("導出失敗！請確保內容中無特殊編碼。");
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
              <BookOpenCheck className="text-white w-7 h-7" />
            </div>
            <div>
              <h1 className="text-xl font-black text-slate-800 tracking-tight leading-none">數學題庫系統</h1>
              <span className="text-[10px] text-indigo-500 font-bold uppercase tracking-wider">Vertical alignment centered</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button onClick={clearSelection} className="text-slate-400 hover:text-red-500 font-bold text-xs px-3 py-2 transition-colors">清除</button>
            <button 
              onClick={handleExport} 
              disabled={generatedQuestions.length === 0 || isExporting}
              className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-200 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg transition-all active:scale-95"
            >
              {isExporting ? <Loader2 className="w-5 h-5 animate-spin" /> : <FileDown className="w-5 h-5" />}
              <span>{isExporting ? "生成 XML 中..." : "導出 Word"}</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <aside className="lg:col-span-4 space-y-6">
          <TreeSelector tree={tree} selectedTypes={selectedTypes} toggleType={toggleType} />
          
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm border-t-4 border-t-indigo-500">
            <div className="flex items-center gap-2 text-indigo-600 font-bold mb-4">
              <Info className="w-5 h-5" />
              <span>排版修正說明</span>
            </div>
            <div className="space-y-4 text-sm text-slate-600">
              <ul className="space-y-2 list-disc pl-4 opacity-80">
                <li><strong>左右對齊：</strong> 已設定為全部靠左對齊。</li>
                <li><strong>上下對齊：</strong> 同一列內容（文字與公式）強制中線對齊。</li>
                <li><strong>檔案穩定性：</strong> 已過濾非法 XML 字元，確保 Word 開啟正常。</li>
                <li><strong>高品質：</strong> 8倍超採樣轉圖，列印清晰不模糊。</li>
              </ul>
            </div>
          </div>
        </aside>

        <section className="lg:col-span-8 space-y-6">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-2 mb-6 text-slate-400">
              <Settings className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest">試卷參數設定</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">試卷名稱</label>
                <input type="text" value={examTitle} onChange={(e) => setExamTitle(e.target.value)} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-bold focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 flex justify-between">
                  <span>出題數量</span>
                  <span className="text-indigo-600">{totalCount} 題</span>
                </label>
                <input type="range" min="1" max="50" value={totalCount} onChange={(e) => setTotalCount(parseInt(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600" />
              </div>
            </div>
            <button onClick={handleGenerate} className="mt-8 w-full bg-slate-900 hover:bg-black text-white py-4 rounded-xl font-black text-lg shadow-xl flex items-center justify-center gap-3 transition-all hover:-translate-y-1 active:translate-y-0">
              <LayoutGrid className="w-5 h-5 text-indigo-400" />
              重新抽題並預覽
            </button>
          </div>

          <div className="space-y-6">
            {generatedQuestions.length > 0 ? (
              generatedQuestions.map((q, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group text-left">
                  <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex items-center gap-3 mb-6">
                    <span className="bg-slate-100 text-slate-800 w-8 h-8 flex items-center justify-center rounded-lg font-black text-xs">{idx + 1}</span>
                    <span className="text-indigo-600 font-bold text-sm">{q.knowledge_point}</span>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 mb-6 flex items-center">
                    <MathContent content={q.question_content} className="text-slate-800 text-lg leading-relaxed font-medium" />
                  </div>
                  <div className="pt-6 border-t border-slate-50 space-y-4">
                    <div className="flex flex-col items-start gap-2">
                      <span className="text-[10px] font-black bg-green-100 text-green-700 px-2 py-1 rounded">解答</span>
                      <MathContent content={q.answer} className="font-bold text-slate-700" />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white py-32 rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center gap-4 text-center">
                <LayoutGrid className="w-12 h-12 text-slate-200" />
                <p className="text-slate-300 font-bold text-lg italic">尚未選擇內容</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;