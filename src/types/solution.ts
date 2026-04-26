export type SolutionStepIcon =
  | "agreement"
  | "milestones"
  | "shield"
  | "upload"
  | "ai"
  | "release";

export type SolutionStepTone = "default" | "ai" | "success";

export type SolutionStep = {
  number: string;
  title: string;
  description: string;
  icon: SolutionStepIcon;
  tone: SolutionStepTone;
};

export type SolutionContent = {
  eyebrow: string;
  title: string;
  description: string;
  steps: SolutionStep[];
};
