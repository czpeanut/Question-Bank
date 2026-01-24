import { Question } from '../types';

export const A2: Question[] = [
  { "knowledge_point": "A-2：循環小數", "question_type": "題型一：循環小數化分數", "question_number": "1", "question_content": "試以十進位表示下列各式的值：(1)0.16(6循環)＋0.43(3循環)＝ (2)2.3(3循環)÷0.45(45循環)＝", "answer": "(1)0.6 (2)5.16", "solution": "(1)15/90＋39/90＝54/90＝0.6 (2)(7/3)÷(5/11)＝77/15，約5.16" },
  { "knowledge_point": "A-2：循環小數", "question_type": "題型四：誤乘問題", "question_number": "1", "question_content": "小杰將一正數「乘以0.5(5循環)」，誤計算成「乘以0.55」，導致所得結果相差3，則此正數應為", "answer": "540", "solution": "設此數為 x。x*(5/9) - x*(55/100) = 3 => (500x - 495x)/900 = 3 => 5x = 2700 => x = 540。" }
];