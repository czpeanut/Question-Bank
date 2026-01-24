import { Question } from '../types';

export const D3: Question[] = [
  {
    "knowledge_point": "D-3：算幾不等式應用",
    "question_type": "題型一：等號成立時",
    "question_number": "1",
    "question_content": "設a、b、c為正數，且滿足＝，＝，若a＋b＋c＝34，則序對(a,b,c)＝",
    "answer": "(10,15,9)",
    "solution": "由算幾不等式可知：\\frac{3a+2b}{2} \\ge \\sqrt{6ab}、\\frac{3b+5c}{2} \\ge \\sqrt{15bc} 本題均為等號成立時，故滿足3a＝2b、3b＝5c，可解得a：b：c＝10：15：9 又a＋b＋c＝34，故a＝10、b＝15、c＝9"
  },
  {
    "knowledge_point": "D-3：算幾不等式應用",
    "question_type": "題型二：應用問題",
    "question_number": "1",
    "question_content": "小杰想在面積為18π的半圓內，作一個面積最大的內接矩形，則該矩形面積為",
    "answer": "36",
    "solution": "設矩形之長2x、寬y，又半圓面積為\\frac{1}{2}πr^2＝18π \\Rightarrow r＝6 如圖所示，x^2＋y^2＝36，且矩形面積為2xy 由算幾不等式：\\frac{x^2+y^2}{2} \\ge xy \\Rightarrow xy \\le 18 \\Rightarrow 2xy \\le 36，故內接矩形最大面積為36"
  }
];