
import { Question } from '../types';

export const UnitA: Question[] = [
  // A-1：有理、無理判定
  { "knowledge_point": "A-1：有理、無理判定", "question_type": "題型一：敘述判定", "question_number": "1", "question_content": "下列敘述何者正確？ (Q：有理數、Q′：無理數、Z：整數)(1)若a、b∈Q，則ab∈Q(2)若a、b∈Q′，則ab∈Q′(3)若a∈Q、b∈Q′，則ab∈Q′(4)若a∈Q、b∈Q′，則a＋b∈Q′(5)若a＋b∈Q、a－b∈Q，則a、b∈Q", "answer": "(1)(4)(5)", "solution": "略" },
  { "knowledge_point": "A-1：有理、無理判定", "question_type": "題型三：有理對有理，無理對無理", "question_number": "1", "question_content": "已知a、b為有理數，且a(3＋2√2)＋b(2－3√2)－9＋7√2＝0，則數對(a,b)＝", "answer": "(1,3)", "solution": "略" },
  // A-2：循環小數
  { "knowledge_point": "A-2：循環小數", "question_type": "題型一：循環小數化分數", "question_number": "1", "question_content": "試以十進位表示下列各式的值：(1)0.16(6循環)＋4/9＝ (2)2.32(32循環)÷0.45(45循環)＝", "answer": "(1)0.61(1循環) (2)5.16", "solution": "略" },
  { "knowledge_point": "A-2：循環小數", "question_type": "題型四：誤乘問題", "question_number": "1", "question_content": "小杰某日執行一計算，因精神不濟，將一正數「乘以0.5(5循環)」，誤計算成「乘以0.55」，導致所得結果相差3，則此正數應為", "answer": "540", "solution": "略" },
  // A-3：有限小數
  { "knowledge_point": "A-3：有限小數", "question_type": "題型一：有限小數判斷", "question_number": "1", "question_content": "下列有理數有哪些可以化成有限小數？(1)13/125 (2)21/168 (3)7/250 (4)11/15 (5)12/60", "answer": "(1)(2)(3)(5)", "solution": "約分後分母質因數僅有2或5者。(1)125=5^3 (2)21/168=1/8, 8=2^3 (3)250=2*5^3 (4)15=3*5 (5)12/60=1/5。" },
  { "knowledge_point": "A-3：有限小數", "question_type": "題型一：有限小數判斷", "question_number": "2", "question_content": "下列哪些數可化成有限小數？(1)3/14 (2)√2－1 (3)13/80 (4)21/105 (5)33/120", "answer": "(3)(4)(5)", "solution": "(1)14=2*7 (2)無理數 (3)80=2^4*5 (4)21/105=1/5 (5)33/120=11/40, 40=2^3*5。" },
  { "knowledge_point": "A-3：有限小數", "question_type": "題型二：有限小數與因倍關係", "question_number": "1", "question_content": "設a、b都是阿拉伯數字，若可化為有限小數，則數對(a,b)＝", "answer": "(4,2)", "solution": "198＝2×32×11可化為有限小數 ⇒分子為9的倍數也是11的倍數(i)9|2660ab7 則2＋6＋6＋0＋a＋b＋7＝a＋b＋21為9的倍數 ⇒a＋b＝6或15(ii)11|2660ab7 則(2＋6＋a＋7)－(6＋0＋b)＝9＋a－b為11的倍數 ⇒a－b＝2或－9" }
];
