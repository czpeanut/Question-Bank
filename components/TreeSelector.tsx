
import React, { useState } from 'react';
import { ChevronRight, ChevronDown, BookOpen, BrainCircuit, Target, CheckSquare, Square } from 'lucide-react';

interface TreeSelectorProps {
  tree: any;
  selectedTypes: string[];
  toggleType: (type: string) => void;
}

export const TreeSelector: React.FC<TreeSelectorProps> = ({ tree, selectedTypes, toggleType }) => {
  const [expandedBooks, setExpandedBooks] = useState<string[]>(["第一冊"]);
  const [expandedKPs, setExpandedKPs] = useState<string[]>([]);

  const toggleBook = (book: string) => {
    setExpandedBooks(prev => prev.includes(book) ? prev.filter(b => b !== book) : [...prev, book]);
  };

  const toggleKP = (kp: string) => {
    setExpandedKPs(prev => prev.includes(kp) ? prev.filter(k => k !== kp) : [...prev, kp]);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 p-4 border-b border-slate-200 flex items-center gap-2">
        <CheckSquare className="w-5 h-5 text-indigo-600" />
        <h3 className="font-bold text-slate-800">選擇題型</h3>
      </div>
      <div className="p-4 max-h-[70vh] overflow-y-auto">
        {Object.keys(tree).map(book => (
          <div key={book} className="mb-2">
            <button 
              onClick={() => toggleBook(book)}
              className="flex items-center w-full gap-2 p-2 hover:bg-slate-100 rounded-lg transition-colors text-left font-medium text-slate-700"
            >
              {expandedBooks.includes(book) ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              <BookOpen className="w-4 h-4 text-blue-500" />
              <span>{book}</span>
            </button>
            
            {expandedBooks.includes(book) && (
              <div className="ml-6 mt-1 space-y-1">
                {Object.keys(tree[book]).map(kp => (
                  <div key={kp}>
                    <button 
                      onClick={() => toggleKP(kp)}
                      className="flex items-center w-full gap-2 p-2 hover:bg-slate-50 rounded-lg transition-colors text-left text-sm font-medium text-slate-600"
                    >
                      {expandedKPs.includes(kp) ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
                      <BrainCircuit className="w-4 h-4 text-purple-500" />
                      <span>{kp}</span>
                    </button>

                    {expandedKPs.includes(kp) && (
                      <div className="ml-8 mt-1 space-y-1">
                        {tree[book][kp].map((type: string) => (
                          <label 
                            key={type}
                            className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer transition-all ${
                              selectedTypes.includes(type) 
                                ? 'bg-indigo-50 text-indigo-700 ring-1 ring-indigo-200' 
                                : 'hover:bg-slate-50 text-slate-500'
                            }`}
                          >
                            <input 
                              type="checkbox"
                              className="hidden"
                              checked={selectedTypes.includes(type)}
                              onChange={() => toggleType(type)}
                            />
                            {selectedTypes.includes(type) 
                              ? <CheckSquare className="w-4 h-4 text-indigo-600" /> 
                              : <Square className="w-4 h-4 text-slate-300" />
                            }
                            <Target className="w-4 h-4 opacity-50" />
                            <span className="text-sm">{type}</span>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
