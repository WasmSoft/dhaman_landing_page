export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type FaqContent = {
  eyebrow: string;
  title: string;
  description: string;
  defaultOpenId: string;
  items: FaqItem[];
};
