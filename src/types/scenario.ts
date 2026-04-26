export type ScenarioStepTone = "blue" | "orange" | "violet";

export type ScenarioStep = {
  number: string;
  label: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tone: ScenarioStepTone;
  desktopImageSide: "left" | "right";
};

export type ScenarioContent = {
  eyebrow: string;
  title: string;
  description: string;
  steps: ScenarioStep[];
};
