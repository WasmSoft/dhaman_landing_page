export type ProblemCardIcon = "document" | "wallet" | "puzzle" | "image" | "gavel";

export type ProblemCard = {
  number: string;
  title: string;
  description: string;
  icon: ProblemCardIcon;
  rotation: string;
};

export type ProblemContent = {
  eyebrow: string;
  headlinePrefix: string;
  headlineHighlight: string;
  headlineSuffix: string;
  description: string;
  cards: ProblemCard[];
};
