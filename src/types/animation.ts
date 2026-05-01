export type AutoAnimateGroupKind = "content" | "repeated";

export type AutoAnimateGroup = {
  container: HTMLElement;
  elements: HTMLElement[];
  kind: AutoAnimateGroupKind;
};

export type SectionAnimationOptions = {
  start?: string;
  once?: boolean;
};
