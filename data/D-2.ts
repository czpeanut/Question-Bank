import { Question } from '../types';

export const D2: Question[] = [
  {
    "knowledge_point": "D-2：算幾不等式結合倒數",
    "question_type": "題型一：倒數型基礎",
    "question_number": "1",
    "question_content": "已知a＞0，則a+\\frac{1}{a}的最小值為        ，此時a值為",
    "answer": "2，1",
    "solution": "由算幾不等式：\\frac{a+\\frac{1}{a}}{2} \\ge \\sqrt{a \\cdot \\frac{1}{a}} = 1 \\Rightarrow a＋\\frac{1}{a} \\ge 2 此時“＝”成立⇔a＝\\frac{1}{a} \\Rightarrow a^2＝1 \\Rightarrow a＝±1(負不合) 故當a＝1時，a＋\\frac{1}{a}的最小值為2"
  },
  {
    "knowledge_point": "D-2：算幾不等式結合倒數",
    "question_type": "題型二：倒數型進階",
    "question_number": "1",
    "question_content": "設f(x)=\\frac{x^2+x+1}{x+1}，且x＞－1，則f(x)有最小值為",
    "answer": "1",
    "solution": "f(x)=x+\\frac{1}{x+1}=(x+1)+\\frac{1}{x+1}-1 \\ge 2-1=1"
  }
];