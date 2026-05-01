export type SecurityNodeId =
  | "secure-link"
  | "clear-record"
  | "visible-policies"
  | "payment-status"
  | "ai-review";

export type SecurityNode = {
  id: SecurityNodeId;
  number: string;
  label: string;
  icon: string;
  orbitInset: string;
  orbitDuration: number;
  orbitDirection: 1 | -1;
  startAngle: number;
};

export type SecurityContent = {
  eyebrow: string;
  title: string;
  description: string;
  coreImage: string;
  coreImageAlt: string;
  nodes: SecurityNode[];
};
