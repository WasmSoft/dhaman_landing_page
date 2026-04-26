import type { ProblemContent } from "@/types";

export const problemContent: ProblemContent = {
  eyebrow: "المشكلة",
  headlinePrefix: "لماذا تفشل كثير من",
  headlineHighlight: "اتفاقات العمل",
  headlineSuffix: "الحر؟",
  description:
    "في كثير من المشاريع، لا تكون المشكلة في جودة العمل فقط، بل في غياب اتفاق واضح يحدد الدفعات، التسليمات، المراجعات، وما يحدث عند الخلاف.",
  cards: [
    {
      number: "01",
      title: "اتفاقات غير واضحة",
      description:
        "نطاق عمل ضبابي يترك مجالاً للتوقعات غير المكتوبة، مما يؤدي إلى خيبة أمل للطرفين عند التسليم النهائي.",
      icon: "document",
      rotation: "rotate-3",
    },
    {
      number: "02",
      title: "دفعات غير محمية",
      description:
        "غياب الضمانات المالية يجعل المستقل يخشى ضياع جهده، ويجعل العميل يقلق من عدم استلام العمل بالكامل.",
      icon: "wallet",
      rotation: "-rotate-2",
    },
    {
      number: "03",
      title: "طلبات خارج النطاق",
      description:
        "توسع نطاق العمل بشكل مستمر (Scope Creep) دون تعويض إضافي، مما يستنزف وقت المستقل وموارده.",
      icon: "puzzle",
      rotation: "rotate-2",
    },
    {
      number: "04",
      title: "مراجعات غير منظمة",
      description:
        "حلقات مراجعة لا نهائية بسبب غياب هيكل واضح يحدد عدد وتوقيت التعديلات المسموح بها.",
      icon: "image",
      rotation: "-rotate-3",
    },
    {
      number: "05",
      title: "خلاف بلا مرجع واضح",
      description:
        "عند نشوب نزاع، لا يوجد طرف ثالث محايد أو سجل معتمد يمكن الرجوع إليه للفصل بإنصاف.",
      icon: "gavel",
      rotation: "rotate-1",
    },
  ],
};
