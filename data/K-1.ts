import { Question } from '../types';

export const K1: Question[] = [
  {
    "knowledge_point": "K-1：指數相關",
    "question_type": "題型一：成長衰退問題",
    "question_number": "1",
    "question_content": "假消息傳播模型：P＝a×(2^{kt}－1)。第一週傳播50人，第二週450人，則第三週傳播人數為",
    "answer": "3650",
    "solution": "50＝a×(2^k－1)、450＝a×(2^{2k}－1)，相除得 2^k=8 \\Rightarrow k=3, a=50/7。P(3) = 50/7 * (2^9 - 1) = 3650"
  }
];