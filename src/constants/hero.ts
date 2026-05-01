import type { HeroContent } from "@/types";

export const heroContent: HeroContent = {
  brand: "ضمان",
  eyebrow: "منصة ضمان مالي ذكية",
  headline: "ضمان ذكي لدفعات العمل الحر",
  description:
    "منصة متكاملة تنظم العلاقة بين العميل والمستقل عبر اتفاقات واضحة، دفعات على مراحل، تتبع للتسليمات، وسياسات مراجعة مدعومة بالذكاء الاصطناعي لحماية حقوق الطرفين.",
  navItems: [
    { label: "المميزات", href: "#features", isActive: true },
    { label: "كيف يعمل", href: "#how-it-works" },
    { label: "التسعير", href: "#pricing" },
    { label: "الأسئلة الشائعة", href: "#faq" },
  ],
  headerAction: {
    label: "ابدأ الآن",
    href: "https://panel.dhaman.wasmsoft.com/",
  },
  primaryAction: {
    label: "ابدأ التجربة",
    href: "https://panel.dhaman.wasmsoft.com/",
  },
  dashboard: {
    title: "لوحة التحكم النشطة",
    cards: [
      {
        label: "إجمالي المبالغ المحمية",
        value: "$12,450.00",
        description: "تم +15% هذا الشهر",
        icon: "wallet",
      },
      {
        label: "الاتفاقات النشطة",
        value: "8",
        description: "3 بانتظار المراجعة",
        icon: "agreement",
      },
      {
        label: "مراجعة AI",
        value: "آمنة ومتوافقة",
        description: "100%",
        icon: "review",
        accent: true,
        progress: 100,
      },
    ],
    milestone: {
      title: "تطوير واجهة المستخدم الأساسية",
      project: "مشروع: منصة التجارة الإلكترونية",
      valueLabel: "القيمة المرحلية",
      value: "$1,200",
      status: "قيد الإيداع",
    },
  },
};
