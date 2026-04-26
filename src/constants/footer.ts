import type { FooterContent } from "@/types";

export const footerContent: FooterContent = {
  cta: {
    eyebrow: "ابدأ بثقة",
    title: "حوّل اتفاقك القادم إلى تجربة أوضح وأكثر أمانًا",
    description:
      "أنشئ اتفاق دفع واضح، قسّم المشروع إلى مراحل، واترك ضمان يساعد الطرفين على متابعة التسليمات والدفعات بوضوح.",
    primaryAction: {
      label: "ابدأ التجربة",
      href: "#start",
    },
    secondaryAction: {
      label: "شاهد كيف يعمل",
      href: "#how-it-works",
    },
  },
  brand: {
    name: "Dhaman",
    tagline: "ضمان مالي ذكي للعمل الحر",
    description:
      "منصة متقدمة لحماية المدفوعات وبناء الثقة بين المستقلين والعملاء عبر تقنيات حديثة وإدارة شفافة للمشاريع.",
  },
  columns: [
    {
      title: "المنتج",
      links: [
        { label: "المميزات", href: "#features" },
        { label: "كيف يعمل", href: "#how-it-works" },
        { label: "سيناريو عملي", href: "#scenario" },
        { label: "الأسئلة الشائعة", href: "#faq" },
      ],
    },
    {
      title: "النظام",
      links: [
        { label: "اتفاقات الدفع", href: "#solution" },
        { label: "مراحل المشروع", href: "#solution" },
        { label: "مراجعة AI", href: "#security" },
        { label: "بوابة العميل", href: "#problem" },
      ],
    },
    {
      title: "الثقة",
      links: [
        { label: "سياسات الاتفاق", href: "#security" },
        { label: "سجل الأحداث", href: "#security" },
        { label: "حالات الدفع", href: "#solution" },
        { label: "حماية الطرفين", href: "#security" },
      ],
    },
  ],
  copyright:
    "© 2026 Dhaman. جميع الحقوق محفوظة. مدعوم بالذكاء الاصطناعي.",
  bottomLinks: [
    { label: "الشروط والأحكام", href: "#terms" },
    { label: "سياسة الخصوصية", href: "#privacy" },
    { label: "اتصل بنا", href: "#contact" },
    { label: "الوثائق", href: "#docs" },
    { label: "الرسوم", href: "#pricing" },
    { label: "تقييم المخاطر", href: "#risk" },
    { label: "العقود الذكية", href: "#contracts" },
    { label: "الخدمات", href: "#services" },
  ],
};
