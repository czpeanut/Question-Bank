import { Question } from '../types';

export const A1: Question[] = [
  {
    "knowledge_point": "A-1:有理、無理判定",
    "question_type": "題型一:敘述判定",
    "question_number": "1",
    "question_content": "下列敘述何者正確？ ($Q$：有理數、$Q'$：無理數、$Z$：整數)\n(1) 若 $a, b \\in Q$，則 $ab \\in Q$\n(2) 若 $a, b \\in Q'$，則 $ab \\in Q'$\n(3) 若 $a \\in Q, b \\in Q'$，則 $ab \\in Q'$\n(4) 若 $a \\in Q, b \\in Q'$，則 $a + b \\in Q'$\n(5) 若 $a + b \\in Q, a - b \\in Q$，則 $a, b \\in Q$",
    "answer": "(1)(4)(5)",
    "solution": "(1) $\\bigcirc$：此為有理數的封閉性\n(2) $\\times$：可舉反例 $a = \\sqrt{2}, b = -\\sqrt{2}$\n(3) $\\times$：反例為 $a = 0$ 時\n(4) $\\bigcirc$：有理數與無理數作加減必為無理數\n(5) $\\bigcirc$：令 $X = a + b, Y = a - b$，則可解得 $a = \\frac{X + Y}{2} \\in Q, b = \\frac{X - Y}{2} \\in Q$"
  },
  {
    "knowledge_point": "A-1:有理、無理判定",
    "question_type": "題型一:敘述判定",
    "question_number": "2",
    "question_content": "$a, b$ 均為有理數且 $a \\cdot b \\neq 0$，$x, y$ 均為無理數，試問下列何者正確？\n(1) $a + b + x$ 為無理數\n(2) $x \\cdot y$ 為無理數\n(3) $ax + by$ 為無理數\n(4) 若 $a + x = b + y$，則 $a = b, x = y$\n(5) $a + b\\sqrt{2}$ 必為無理數",
    "answer": "(1)(5)",
    "solution": "(2) $\\times$：反例：$x = \\sqrt{3}, y = \\sqrt{3}$\n(3) $\\times$：反例：$a = 1, b = -1, x = \\sqrt{3}, y = \\sqrt{3}$\n(4) $\\times$：反例：$a = 2, b = 1, x = -1 + \\sqrt{3}, y = \\sqrt{3}$"
  },
  {
    "knowledge_point": "A-1:有理、無理判定",
    "question_type": "題型一:敘述判定",
    "question_number": "3",
    "question_content": "下列敘述何者正確？\n(1) 若 $a, b$ 為有理數，則 $a + b$ 與 $ab$ 均為有理數\n(2) 若 $a + b, ab$ 為有理數，則 $a, b$ 均為有理數\n(3) 若 $a, b$ 為無理數，則 $a + b$ 與 $ab$ 均為無理數\n(4) 若 $a$ 為有理數、$b$ 為無理數，則 $a + b$ 必為無理數\n(5) 若 $a + b\\sqrt{2} = 0$，則 $a = b = 0$\n(6) 若 $x, y$ 均為無理數，$\\sqrt{z}$ 為無理數，則 $x - y\\sqrt{z}$ 亦為無理數\n(7) 若 $x, y$ 均為無理數，則 $x - y$ 亦為無理數\n(8) 若 $x, y, x + y$ 均為無理數，則 $x - y$ 亦為無理數",
    "answer": "(1)(4)",
    "solution": "(2) $\\times$：反例：取 $a = \\sqrt{2}, b = -\\sqrt{2}$\n(3) $\\times$：反例：取 $a = \\sqrt{2}, b = -\\sqrt{2}$\n(5) $\\times$：反例：取 $a = -2, b = \\sqrt{2}$\n(6) $\\times$：反例：取 $x = \\sqrt{6}, y = \\sqrt{3}, z = 2$\n(7) $\\times$：反例：取 $x = y = \\sqrt{2}$\n(8) $\\times$：反例：取 $x = y = \\sqrt{2}$"
  },
  {
    "knowledge_point": "A-1:有理、無理判定",
    "question_type": "題型一:敘述判定",
    "question_number": "4",
    "question_content": "設 $a, b$ 為有理數，$c, d$ 為無理數，則下列何者為真？\n(1) $ac$ 為無理數\n(2) $c + d$ 為無理數\n(3) $a + c$ 為無理數\n(4) $cd$ 為無理數\n(5) $a + b$ 為有理數\n(6) $c + d, c - d$ 中至少有一個為無理數",
    "answer": "(3)(5)(6)",
    "solution": "(1) $\\times$：反例：取 $a = 0$\n(2) $\\times$：反例：取 $c = \\sqrt{2}, d = -\\sqrt{2}$\n(4) $\\times$：反例：取 $c = d = \\sqrt{2}$"
  },
  {
    "knowledge_point": "A-1:有理、無理判定",
    "question_type": "題型一:敘述判定",
    "question_number": "5",
    "question_content": "設 $a, b, c$ 皆為非零實數，則下列敘述何者正確？\n(1) 若 $a + b$ 與 $a - b$ 皆為有理數，則 $a$ 與 $b$ 皆為有理數\n(2) 若 $ab$ 與 $a + b$ 皆為有理數，則 $a$ 與 $b$ 皆為有理數\n(3) 若 $a + b$ 與 $b + c$ 皆為有理數，則 $a + c$ 為有理數\n(4) 若 $a + b$ 與 $b + c$ 皆為有理數，則 $a - c$ 為有理數\n(5) 若 $ab$ 與 $bc$ 皆為有理數，則 $ac$ 為有理數",
    "answer": "(1)(4)",
    "solution": "(1) $\\bigcirc$：$a = \\frac{(a + b) + (a - b)}{2}, b = \\frac{(a + b) - (a - b)}{2}$ (由有理數的封閉性)\n(2) $\\times$：反例：$a = 1 + \\sqrt{2}, b = 1 - \\sqrt{2}$，則 $ab = -1, a + b = 2$\n(3) $\\times$：反例：$a = \\sqrt{2}, b = -\\sqrt{2}, c = \\sqrt{2}$，則 $a + b = 0, b + c = 0$，但 $a + c = 2\\sqrt{2}$\n(4) $\\bigcirc$：$a - c = (a + b) - (b + c)$，有理數的封閉性\n(5) $\\times$：反例：$a = \\sqrt{2} + 1, b = \\sqrt{2} - 1, c = \\sqrt{2} + 1$，則 $ab = 1, bc = 1$，但 $ac = 3 + 2\\sqrt{2}$"
  },
  {
    "knowledge_point": "A-1:有理、無理判定",
    "question_type": "題型二:有理數的高次方",
    "question_number": "1",
    "question_content": "設 $a \\in R$，若 $a^6$ 與 $a^{14}$ 均為有理數，則下列哪些必為有理數？\n(1) $a$\n(2) $a^2$\n(3) $a^3$\n(4) $a^4$\n(5) $a^8$",
    "answer": "(2)(4)(5)",
    "solution": "$a^6$ 是有理數，則 $a^6 \\times a^6 = a^{12}$ 也是有理數，所以 $\\frac{a^{14}}{a^{12}} = a^2$ 也是有理數\n$\\Rightarrow a^{2n}$ 都是有理數，但 $a$ 無法確定，故選 (2)(4)(5)"
  },
  {
    "knowledge_point": "A-1:有理、無理判定",
    "question_type": "題型二:有理數的高次方",
    "question_number": "2",
    "question_content": "是非題：若 $a^3 \\in Q$ 且 $a^6 \\in Q$，則 $a \\in Q$",
    "answer": "╳",
    "solution": "若 $a = \\sqrt[3]{2}$，則 $a^3 = 2$ 為有理數、$a^6 = 4$ 亦為有理數，故原敘述未必成立"
  },
  {
    "knowledge_point": "A-1:有理、無理判定",
    "question_type": "題型二:有理數的高次方",
    "question_number": "3",
    "question_content": "是非題：若 $a^3 \\in Q$ 且 $a^5 \\in Q$，則 $a \\in Q$",
    "answer": "○",
    "solution": "$\\because a^3, a^5 \\in Q \\quad \\therefore a^2 = a^5 \\div a^3 \\in Q$ (由有理數的封閉性可知)\n同理，$a = a^3 \\div a^2 \\in Q$"
  },
  {
    "knowledge_point": "A-1:有理、無理判定",
    "question_type": "題型二:有理數的高次方",
    "question_number": "4",
    "question_content": "是非題：若 $a \\in R$ 且 $a^{107}, a^{2018}$ 皆為有理數，則 $a$ 必為有理數",
    "answer": "○",
    "solution": "$\\because 107$ 和 $2018$ 互質 $\\quad \\therefore a$ 必為有理數"
  },
  {
    "knowledge_point": "A-1:有理、無理判定",
    "question_type": "題型二:有理數的高次方",
    "question_number": "5",
    "question_content": "設 $p$ 為一實數，若 $p^5$ 與 $p^{13}$ 皆為有理數，試證 $p$ 為一有理數",
    "answer": "見詳解",
    "solution": "$\\because \\frac{p^{13}}{(p^5)^2} = p^3 \\in Q, \\frac{p^5}{p^3} = p^2 \\in Q$\n$\\therefore \\frac{p^3}{p^2} = p \\in Q$，故得證"
  },
  {
    "knowledge_point": "A-1:有理、無理判定",
    "question_type": "題型三:有理對有理，無理對無理",
    "question_number": "1",
    "question_content": "已知 $a, b$ 為有理數，且 $a(3 + 2\\sqrt{2}) + b(2 - 3\\sqrt{2}) - 9 + 7\\sqrt{2} = 0$，則數對 $(a, b) = $",
    "answer": "(1,3)",
    "solution": "已知 $a(3 + 2\\sqrt{2}) + b(2 - 3\\sqrt{2}) - 9 + 7\\sqrt{2} = 0 \\Rightarrow (3a + 2b) + (2a - 3b)\\sqrt{2} = 9 - 7\\sqrt{2}$\n利用有理部＝有理部，無理部＝無理部\n$\\Rightarrow \\begin{cases} 3a + 2b = 9 \\\\ 2a - 3b = -7 \\end{cases} \\Rightarrow \\begin{cases} a = 1 \\\\ b = 3 \\end{cases} \\Rightarrow (a, b) = (1,3)$"
  },
  {
    "knowledge_point": "A-1:有理、無理判定",
    "question_type": "題型三:有理對有理，無理對無理",
    "question_number": "2",
    "question_content": "已知 $x, y$ 為有理數，若 $x + (\\sqrt{12} - 6)y + \\frac{23}{2 + \\sqrt{27}} = 0$，求 $(x, y) = $",
    "answer": "$(-7, -\\frac{3}{2})$",
    "solution": "$x + (\\sqrt{12} - 6)y + \\frac{23}{2 + \\sqrt{27}} = 0 \\Rightarrow x + (\\sqrt{12} - 6)y + \\frac{23(\\sqrt{27} - 2)}{23} = 0$\n$\\Rightarrow x + (2\\sqrt{3} - 6)y + 3\\sqrt{3} - 2 = 0$\n$\\Rightarrow (x - 6y - 2) + (2y + 3)\\sqrt{3} = 0$\n$\\Rightarrow \\begin{cases} x - 6y - 2 = 0 \\\\ 2y + 3 = 0 \\end{cases}$，解得 $(x, y) = (-7, -\\frac{3}{2})$"
  },
  {
    "knowledge_point": "A-1:有理、無理判定",
    "question_type": "題型三:有理對有理，無理對無理",
    "question_number": "3",
    "question_content": "設 $x, y$ 為有理數，若 $x\\sqrt{2} + y\\sqrt{2} + 4\\sqrt{3} = 5\\sqrt{2} + x\\sqrt{3}$，則數對 $(x, y) = $",
    "answer": "(4,1)",
    "solution": "將原式移項\n得：$(x + y - 5)\\sqrt{2} = (x - 4)\\sqrt{3}$\n故 $\\begin{cases} x + y - 5 = 0 \\\\ x - 4 = 0 \\end{cases}$，解得 $(x, y) = (4,1)$"
  },
  {
    "knowledge_point": "A-1:理、無理判定",
    "question_type": "題型三:有理對有理，無理對無理",
    "question_number": "4",
    "question_content": "已知 $a, b$ 均為有理數且 $\\frac{4 - a\\sqrt{7}}{3 + 5\\sqrt{7}}$ 與 $\\frac{b + 3\\sqrt{5}}{2 + \\sqrt{5}}$ 均為有理數，則 $a + b = $",
    "answer": "$-\\frac{2}{3}$",
    "solution": "將題目有理化後化簡可得：\n$\\frac{4 - a\\sqrt{7}}{3 + 5\\sqrt{7}} = \\frac{(4 - a\\sqrt{7})(5\\sqrt{7} - 3)}{(3 + 5\\sqrt{7})(5\\sqrt{7} - 3)} = \\frac{-12 - 35a + (20 + 3a)\\sqrt{7}}{166}$ 為有理數\n$\\frac{b + 3\\sqrt{5}}{2 + \\sqrt{5}} = \\frac{(b + 3\\sqrt{5})(\\sqrt{5} - 2)}{(\\sqrt{5} + 2)(\\sqrt{5} - 2)} = \\frac{(15 - 2b) + (b - 6)\\sqrt{5}}{1}$ 為有理數\n$\\Rightarrow a = -\\frac{20}{3}, b = 6$，故 $a + b = -\\frac{2}{3}$"
  },
  {
    "knowledge_point": "A-1:有理、無理判定",
    "question_type": "題型三:有理對有理，無理對無理",
    "question_number": "5",
    "question_content": "設 $x, y$ 均為有理數，若 $(3 - \\sqrt{3})x + (1 + 3\\sqrt{3})y = 7 - \\sqrt{3}$，則 $x + y = $",
    "answer": "$\\frac{13}{5}$",
    "solution": "將原式移項得 $(3x + y) + (-x + 3y)\\sqrt{3} = 7 - \\sqrt{3}$\n利用有理部＝有理部，無理部＝無理部\n可知 $3x + y = 7$ 且 $3y - x = -1$，則 $x = \\frac{11}{5}, y = \\frac{2}{5}$\n故 $x + y = \\frac{13}{5}$"
  }
];