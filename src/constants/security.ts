import type { SecurityContent } from "@/types";

export const securityContent: SecurityContent = {
  eyebrow: "الثقة والحماية",
  title: "ذكاء يحمي كل خطوة في الاتفاق",
  description:
    "يدير ضمان طبقة حماية ذكية تربط بين السجلات، السياسات، حالات الدفع، ومراجعة AI حتى يعرف العميل والمستقل ما يحدث في كل مرحلة.",
  coreImage: "/security/images/ai-protection-core.jpg",
  coreImageAlt: "روبوت ذكاء اصطناعي يمثل طبقة الحماية المركزية في ضمان.",
  nodes: [
    {
      id: "secure-link",
      number: "01",
      label: "رابط آمن",
      icon: "/security/images/secure-link-icon.svg",
    },
    {
      id: "clear-record",
      number: "02",
      label: "سجل واضح",
      icon: "/security/images/clear-record-icon.svg",
    },
    {
      id: "visible-policies",
      number: "03",
      label: "سياسات ظاهرة",
      icon: "/security/images/visible-policies-icon.svg",
    },
    {
      id: "payment-status",
      number: "04",
      label: "حالات دفع",
      icon: "/security/images/payment-status-icon.svg",
    },
    {
      id: "ai-review",
      number: "05",
      label: "مراجعة AI",
      icon: "/security/images/ai-review-icon.svg",
    },
  ],
};
