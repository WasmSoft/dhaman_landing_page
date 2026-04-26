export type HeroNavItem = {
  label: string;
  href: string;
  isActive?: boolean;
};

export type HeroAction = {
  label: string;
  href: string;
};

export type HeroDashboardCardIcon = "wallet" | "agreement" | "review";

export type HeroDashboardCard = {
  label: string;
  value: string;
  description: string;
  icon: HeroDashboardCardIcon;
  accent?: boolean;
  progress?: number;
};

export type HeroMilestone = {
  title: string;
  project: string;
  valueLabel: string;
  value: string;
  status: string;
};

export type HeroDashboard = {
  title: string;
  cards: HeroDashboardCard[];
  milestone: HeroMilestone;
};

export type HeroContent = {
  brand: string;
  eyebrow: string;
  headline: string;
  description: string;
  navItems: HeroNavItem[];
  headerAction: HeroAction;
  primaryAction: HeroAction;
  dashboard: HeroDashboard;
};
