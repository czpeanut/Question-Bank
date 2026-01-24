import { Question } from '../types';

export const K2: Question[] = [
  {
    "knowledge_point": "K-2：對數相關",
    "question_type": "題型一：班佛法則",
    "question_number": "1",
    "question_content": "班佛法則：銀行存款的首位數為a的比例約有 \\log_{10}(1+\\frac{1}{a})。存款首位數為4, 5, 6或7的人約占多少比例?",
    "answer": "30.1%",
    "solution": "所求＝\\log(5/4)+\\log(6/5)+\\log(7/6)+\\log(8/7) = \\log(2) \\approx 0.3010"
  },
  {
    "knowledge_point": "K-2：對數相關",
    "question_type": "題型四：地震問題",
    "question_number": "1",
    "question_content": "目前國際使用芮氏規模來表示地震強度，能量關係式為 \\log E = 5.24 + 1.44r。規模9地震釋放能量是規模7.3的幾倍？",
    "answer": "281倍",
    "solution": "\\log \\frac{E_9}{E_{7.3}} = 1.44 \\times (9-7.3) = 2.448 \\Rightarrow \\frac{E_9}{E_{7.3}} = 10^{2.448} \\approx 281"
  }
];