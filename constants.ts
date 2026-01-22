
import { Question } from './types';
import { A1 } from './data/A-1';
import { A2 } from './data/A-2';
import { A3 } from './data/A-3';
import { B1 } from './data/B-1';
import { B2 } from './data/B-2';
import { B3 } from './data/B-3';
import { C1 } from './data/C-1';
import { C2 } from './data/C-2';
import { F1 } from './data/F-1';

// 匯總所有細分的題目
export const RAW_DATA: Question[] = [
  ...A1,
  ...A2,
  ...A3,
  ...B1,
  ...B2,
  ...B3,
  ...C1,
  ...C2,
  ...F1
];

// 建立樹狀結構
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
