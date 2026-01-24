import { Question } from './types';
import { A1 } from './data/A-1';
import { A2 } from './data/A-2';
import { A3 } from './data/A-3';
import { B1 } from './data/B-1';
import { B2 } from './data/B-2';
import { B3 } from './data/B-3';
import { C1 } from './data/C-1';
import { C2 } from './data/C-2';
import { D1 } from './data/D-1';
import { D2 } from './data/D-2';
import { D3 } from './data/D-3';
import { F1 } from './data/F-1';
import { F2 } from './data/F-2';
import { F3 } from './data/F-3';
import { G1 } from './data/G-1';
import { G2 } from './data/G-2';
import { G3 } from './data/G-3';
import { G4 } from './data/G-4';
import { G5 } from './data/G-5';
import { G6 } from './data/G-6';
import { H1 } from './data/H-1';
import { I2 } from './data/I-2';
import { K1 } from './data/K-1';
import { K2 } from './data/K-2';

// 匯總所有章節題目，保留 LaTeX 格式
export const RAW_DATA: Question[] = [
  ...A1, ...A2, ...A3,
  ...B1, ...B2, ...B3,
  ...C1, ...C2,
  ...D1, ...D2, ...D3,
  ...F1, ...F2, ...F3,
  ...G1, ...G2, ...G3, ...G4, ...G5, ...G6,
  ...H1, ...I2, ...K1, ...K2
];

// 建立樹狀結構供選單使用
export const getQuestionTree = (data: Question[]) => {
  const tree: any = { "第一冊": {} };
  data.forEach(q => {
    const kp = q.knowledge_point;
    const qt = q.question_type;
    if (!tree["第一冊"][kp]) {
      tree["第一冊"][kp] = new Set<string>();
    }
    tree["第一冊"][kp].add(qt);
  });
  
  Object.keys(tree["第一冊"]).forEach(kp => {
    tree["第一冊"][kp] = Array.from(tree["第一冊"][kp]);
  });
  
  return tree;
};