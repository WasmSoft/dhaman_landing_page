import type { SolutionContent } from "@/types";

export const solutionContent: SolutionContent = {
  eyebrow: "الحل",
  title: "ضمان يحوّل الاتفاق إلى نظام دفع واضح",
  description:
    "بدل الاعتماد على محادثات متفرقة ووعود غير موثقة، يمنح ضمان الطرفين مسارًا واضحًا من إنشاء الاتفاق حتى مراجعة التسليم وصرف الدفعة.",
  steps: [
    {
      number: "1",
      title: "اتفاق واضح",
      description:
        "تحديد نطاق العمل بوضوح، قيمة المشروع الإجمالية، وشروط القبول النهائية.",
      icon: "agreement",
      tone: "default",
    },
    {
      number: "2",
      title: "مراحل دفع",
      description:
        "تقسيم المشروع إلى مراحل واضحة المعالم مع تواريخ تسليم وقيم مالية محددة.",
      icon: "milestones",
      tone: "default",
    },
    {
      number: "3",
      title: "دفعات محمية",
      description:
        "حالة بصرية واضحة لكل دفعة: قيد الانتظار، محتجزة في الضمان، قيد المراجعة، أو جاهزة.",
      icon: "shield",
      tone: "default",
    },
    {
      number: "4",
      title: "مراجعة التسليم",
      description:
        "يقوم المستقل برفع الملفات، ويقوم العميل بمراجعتها بناءً على شروط القبول المسبقة.",
      icon: "upload",
      tone: "default",
    },
    {
      number: "5",
      title: "مراجعة AI",
      description:
        "يساعد الذكاء الاصطناعي في مقارنة التسليمات أو النزاعات مع بنود الاتفاق الأصلية.",
      icon: "ai",
      tone: "ai",
    },
    {
      number: "6",
      title: "صرف الدفعة",
      description:
        "يتم تحرير الدفعة المالية تلقائياً بعد الموافقة النهائية أو توصية النظام.",
      icon: "release",
      tone: "success",
    },
  ],
};
