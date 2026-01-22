
import React, { useState, useMemo, useCallback } from 'react';
import { RAW_DATA, getQuestionTree } from './constants';
import { Question } from './types';
import { TreeSelector } from './components/TreeSelector';
import { FileDown, BookOpenCheck, Settings, Trash2, LayoutGrid, Info } from 'lucide-react';
import { generateDocx } from './services/docxService';

const App: React.FC = () => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [totalCount, setTotalCount] = useState<number>(10);
  const [examTitle, setExamTitle] = useState<string>("2024 高一數學隨堂測驗");
  const [generatedQuestions, setGeneratedQuestions] = useState<Question[]>([]);

  const tree = useMemo(() => getQuestionTree(RAW_DATA), []);

  const toggleType = useCallback((type: string) => {
    setSelectedTypes(prev => 
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  }, []);

  const clearSelection = () => {
    setSelectedTypes([]);
    setGeneratedQuestions([]);
  };

  const handleGenerate = () => {
    if (selectedTypes.length === 0) {
      alert("請至少選擇一個題型！");
      return;
    }

    // Distribute questions
    const questionsPerType = Math.floor(totalCount / selectedTypes.length);
    let remainder = totalCount % selectedTypes.length;

    const selectedPool: Question[] = [];

    selectedTypes.forEach((type, index) => {
      const typePool = RAW_DATA.filter(q => q.question_type === type);
      const countToPick = questionsPerType + (remainder > 0 ? 1 : 0);
      remainder--;

      // Shuffle and pick
      const shuffled = [...typePool].sort(() => 0.5 - Math.random());
      selectedPool.push(...shuffled.slice(0, countToPick));
    });

    setGeneratedQuestions(selectedPool);
  };

  const handleExport = () => {
    if (generatedQuestions.length === 0) {
      alert("請先生成題目！");
      return;
    }
    generateDocx(generatedQuestions, examTitle);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="shrink-0">
              {/* 使用者提供的圖示 - 假設檔案名稱為 logo.png */}
              <img 
                src="logo.png" 
                alt="系統圖示" 
                className="w-12 h-12 object-contain"
                onError={(e) => {
                  // 如果圖片不存在，暫時顯示一個後備圓框避免版面崩掉
                  (e.target as HTMLImageElement).src = "https://api.iconify.design/flat-color-icons:idea.svg";
                }}
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
              <h1 className="text-2xl font-black text-slate-800 tracking-tighter">數學題庫系統</h1>
              <span className="text-xs text-slate-400 font-medium whitespace-nowrap">
                本系統仍處於測試階段，尚未進行交叉除錯
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <button 
              onClick={clearSelection}
              className="text-slate-500 hover:text-red-600 flex items-center gap-1 text-sm font-medium transition-colors p-2"
            >
              <Trash2 className="w-4 h-4" />
              <span className="hidden sm:inline">清除重選</span>
            </button>
            <button 
              onClick={handleExport}
              disabled={generatedQuestions.length === 0}
              className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-200 disabled:text-slate-400 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-bold flex items-center gap-2 transition-all shadow-md active:scale-95"
            >
              <FileDown className="w-4 h-4" />
              <span className="text-sm sm:text-base">下載 .DOCX</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full p-4 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Selection Tree */}
        <div className="lg:col-span-4 space-y-6">
          <TreeSelector 
            tree={tree} 
            selectedTypes={selectedTypes} 
            toggleType={toggleType} 
          />

          <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl flex gap-3 shadow-sm">
            <Info className="w-5 h-5 text-blue-500 shrink-0" />
            <div className="text-sm text-blue-800 leading-relaxed font-medium">
              系統將會從您勾選的題型中<strong>平均分配</strong>出題數量。若總數無法整除，會由排在前面的題型多出一題。
            </div>
          </div>
        </div>

        {/* Right Column: Config & Preview */}
        <div className="lg:col-span-8 space-y-6">
          {/* Config Card */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-2 mb-6">
              <Settings className="w-5 h-5 text-slate-400" />
              <h2 className="font-bold text-slate-800">試卷配置</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-600">試卷標題</label>
                <input 
                  type="text" 
                  value={examTitle}
                  onChange={(e) => setExamTitle(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all font-medium"
                  placeholder="輸入試卷名稱..."
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-600">總出題數</label>
                <div className="flex items-center gap-4 py-2">
                  <input 
                    type="range" 
                    min="1" 
                    max="50" 
                    value={totalCount}
                    onChange={(e) => setTotalCount(parseInt(e.target.value))}
                    className="flex-1 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                  />
                  <div className="bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
                    <span className="font-black text-indigo-600 text-lg">{totalCount}</span>
                  </div>
                </div>
              </div>
            </div>

            <button 
              onClick={handleGenerate}
              className="mt-8 w-full bg-slate-800 hover:bg-slate-900 text-white py-4 rounded-xl font-black text-lg shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <LayoutGrid className="w-5 h-5" />
              生成題目預覽
            </button>
          </div>

          {/* Preview Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <LayoutGrid className="w-5 h-5 text-slate-400" />
                <h2 className="font-bold text-slate-800">題目預覽 ({generatedQuestions.length})</h2>
              </div>
            </div>

            {generatedQuestions.length > 0 ? (
              <div className="grid grid-cols-1 gap-4">
                {generatedQuestions.map((q, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-indigo-300 hover:shadow-md transition-all">
                    <div className="flex justify-between items-start mb-4">
                      <span className="px-3 py-1 bg-indigo-600 text-white text-[10px] uppercase font-black rounded-md shadow-sm">
                        題 {idx + 1}
                      </span>
                      <div className="flex flex-col items-end">
                        <span className="text-xs text-slate-500 font-bold">{q.knowledge_point}</span>
                        <span className="text-[10px] text-slate-400">{q.question_type}</span>
                      </div>
                    </div>
                    <p className="text-slate-800 leading-relaxed mb-6 font-medium text-lg">
                      {q.question_content}
                    </p>
                    <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-black text-green-600 bg-green-50 px-2 py-0.5 rounded">答案</span>
                        <p className="text-sm font-bold text-slate-700">{q.answer}</p>
                      </div>
                      <details className="text-sm group">
                        <summary className="cursor-pointer text-slate-400 hover:text-indigo-600 transition-colors list-none flex items-center gap-1 font-bold">
                          <span className="bg-slate-100 group-open:bg-indigo-100 group-open:text-indigo-600 px-2 py-0.5 rounded text-[10px] transition-colors">解析</span>
                          點擊查看詳解
                        </summary>
                        <div className="mt-3 p-4 bg-slate-50 rounded-lg border-l-4 border-indigo-400 text-slate-600 leading-relaxed">
                          {q.solution}
                        </div>
                      </details>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white py-24 rounded-xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400 space-y-4">
                <div className="p-6 bg-slate-50 rounded-full border border-slate-100">
                  <BookOpenCheck className="w-16 h-16 opacity-10" />
                </div>
                <div className="text-center">
                  <p className="font-black text-slate-500 text-lg">尚未生成試卷</p>
                  <p className="text-sm">請從左側挑選題型並點擊「生成題目預覽」</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-10 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-400 text-sm font-medium">© 2026 Completed by Ian in the endless hell of parenting.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
