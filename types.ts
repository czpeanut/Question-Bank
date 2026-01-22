
export interface Question {
  knowledge_point: string;
  question_type: string;
  question_number: string;
  question_content: string;
  answer: string;
  solution: string;
  book?: string; // Currently all are "第一冊"
}

export interface TreeStructure {
  [book: string]: {
    [knowledgePoint: string]: string[];
  };
}

export interface SelectionState {
  book: string;
  knowledgePoint: string;
  questionType: string;
}
