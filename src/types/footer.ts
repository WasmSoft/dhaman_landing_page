export type FooterLink = {
  label: string;
  href: string;
};

export type FooterColumn = {
  title: string;
  links: FooterLink[];
};

export type FooterCtaContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction: FooterLink;
  secondaryAction: FooterLink;
};

export type FooterBrand = {
  name: string;
  tagline: string;
  description: string;
};

export type FooterContent = {
  cta: FooterCtaContent;
  brand: FooterBrand;
  columns: FooterColumn[];
  copyright: string;
  bottomLinks: FooterLink[];
};
