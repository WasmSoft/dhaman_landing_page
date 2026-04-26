import type { ScenarioContent } from "@/types";

export const scenarioContent: ScenarioContent = {
  eyebrow: "سيناريو عملي",
  title: "كيف يحسم ضمان الخلافات بوضوح؟",
  description:
    "بدل أن يتحول الخلاف إلى نقاش طويل، يراجع ضمان نطاق المرحلة، التسليم، وسياسات الاتفاق ليقترح القرار الأنسب للطرفين.",
  steps: [
    {
      number: "01",
      label: "الخطوة 01",
      title: "تحديد نطاق المرحلة",
      description:
        "يتم توثيق متطلبات المرحلة بدقة قبل بدء العمل، بما في ذلك التسليمات المحددة، معايير القبول، والمبلغ المخصص، لضمان وضوح التوقعات لدى الطرفين.",
      image: "/scenario/images/scope-review.png",
      imageAlt: "واجهة تعرض تفاصيل نطاق مرحلة المشروع ومعايير القبول.",
      tone: "blue",
      desktopImageSide: "left",
    },
    {
      number: "02",
      label: "الخطوة 02",
      title: "تسجيل اعتراض العميل",
      description:
        "عند تسليم العمل، يمكن للعميل مراجعة المخرجات وإضافة تعليقات محددة إذا كان هناك أي اختلاف عن النطاق المتفق عليه، مع توثيق النقاط الخلافية.",
      image: "/scenario/images/client-objection.png",
      imageAlt: "واجهة توضح اعتراض العميل على التسليم وتسجيل سبب الخلاف.",
      tone: "orange",
      desktopImageSide: "right",
    },
    {
      number: "03",
      label: "الخطوة 03",
      title: "مراجعة AI والقرار المقترح",
      description:
        "يقوم محرك الذكاء الاصطناعي الخاص بضمان بمقارنة المخرجات مع النطاق الأصلي، مقدماً نسبة مطابقة دقيقة وتوصية عادلة لحل الخلاف بشكل فوري.",
      image: "/scenario/images/ai-decision.png",
      imageAlt: "لوحة تعرض نتيجة مراجعة الذكاء الاصطناعي ونسبة المطابقة.",
      tone: "violet",
      desktopImageSide: "left",
    },
  ],
};
