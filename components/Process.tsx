const steps = [
  {
    n: "١",
    title: "استشارة وتقييم",
    body: "نراجع وضع حسابك الحالي في ميتا ونحدد الخدمات اللي يحتاجها مشروعك بالضبط.",
  },
  {
    n: "٢",
    title: "تنفيذ وربط",
    body: "نجهز المستندات أو نبني الربط التقني، ونتابع الطلب مباشرة مع أنظمة ميتا.",
  },
  {
    n: "٣",
    title: "تسليم ومتابعة",
    body: "نسلّمك الوصول والتوثيقات كاملة، مع دعم فني إذا واجهت أي مشكلة لاحقًا.",
  },
];

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-content px-6 py-20">
      <h2 className="font-display text-3xl font-bold text-white">آلية العمل</h2>
      <div className="mt-10 grid gap-10 md:grid-cols-3">
        {steps.map((step, i) => (
          <div key={step.n} className="relative pt-8">
            <span className="font-display text-4xl text-white/15">{step.n}</span>
            <h3 className="mt-3 font-display text-xl text-white">{step.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-slate-400">{step.body}</p>
            {i < steps.length - 1 && (
              <span className="absolute -left-5 top-12 hidden h-px w-10 bg-white/10 md:block" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}