const reasons = [
  {
    title: "تخصص، لا تعدد خدمات",
    body: "نركّز على التوثيق والتكامل التقني مع ميتا فقط، بلا تشتت على خدمات تسويقية عامة.",
  },
  {
    title: "متابعة يومية للطلب",
    body: "لا تُترك بانتظار الرد لوحدك، نتابع حالة الطلب ونخبرك بأي تطور أولًا بأول.",
  },
  {
    title: "تجهيز مطابق لسياسات ميتا",
    body: "نضبط بيانات الحساب والمستندات بما يطابق أحدث معايير القبول لتقليل احتمالية الرفض.",
  },
  {
    title: "معالجة حالات الرفض السابقة",
    body: "إذا سبق رفض طلبك، نحدد السبب الفعلي ونعيد التقديم بمعالجة مباشرة لنقطة الرفض.",
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="border-t border-white/10 bg-white/[0.02] py-20">
      <div className="mx-auto max-w-content px-6">
        <h2 className="font-display text-3xl font-bold text-white">لماذا موثوق</h2>
        <p className="mt-3 max-w-lg text-slate-400">
          خبرة تقنية مركّزة على أنظمة ميتا التجارية، وليست خدمة عامة ضمن باقة تسويقية.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-white/20"
            >
              <h3 className="font-display text-lg text-white">{reason.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-400">{reason.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}