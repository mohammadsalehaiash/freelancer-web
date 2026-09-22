import ServiceCard, { Service } from "./ServiceCard";

const verification: Service[] = [
  {
    method: "POST",
    path: "/business/verify",
    title: "توثيق النشاط التجاري في ميتا",
    description:
      "تجهيز ومراجعة مستندات النشاط، وتقديم طلب التوثيق عبر Business Manager حتى اعتماده رسميًا.",
  },
  {
    method: "POST",
    path: "/developers/app/create",
    title: "إنشاء وتسجيل تطبيق على Facebook Developers Console",
    description:
      "تسجيل التطبيق، ضبط الصلاحيات المطلوبة، وتجهيزه لاجتياز App Review من ميتا.",
  },
  {
    method: "POST",
    path: "/auth/oauth",
    title: "إعداد Facebook Login / OAuth",
    description:
      "تفعيل تسجيل الدخول عبر حساب فيسبوك في المواقع والتطبيقات، بضبط صلاحيات الوصول بشكل صحيح.",
  },
];

const integration: Service[] = [
  {
    method: "POST",
    path: "/whatsapp/business-api",
    title: "ربط واتساب بيزنس API",
    description:
      "ربط رقم العمل بواتساب بيزنس API، وإعداد واعتماد قوالب الرسائل (Message Templates).",
  },
  {
    method: "POST",
    path: "/whatsapp/apps",
    title: "تطوير تطبيقات وبوتات واتساب",
    description:
      "أنظمة حجز وطلبات، ردود آلية، وربط Webhooks لاستقبال ومعالجة رسائل العملاء تلقائيًا.",
  },
  {
    method: "POST",
    path: "/messenger/bot",
    title: "شات بوت لماسنجر",
    description: "بناء بوت رد تلقائي وإدارة محادثات صفحة فيسبوك على مدار الساعة.",
  },
  {
    method: "POST",
    path: "/pixel/capi",
    title: "Meta Pixel و Conversion API",
    description:
      "تركيب البكسل، إعداد Conversion API (CAPI)، وحل مشاكل التحقق من النطاق وتتبع التحويلات.",
  },
  {
    method: "GET",
    path: "/support",
    title: "دعم فني واستشارات",
    description: "حل مشاكل ربط الحسابات والتطبيقات، واستشارات تقنية لتوثيق الأعمال.",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-y border-white/10 bg-white/[0.02] py-20">
      <div className="mx-auto max-w-content px-6">
        <div className="max-w-lg">
          <h2 className="font-display text-3xl font-bold text-white">الخدمات</h2>
          <p className="mt-3 text-slate-400">
            كل خدمة مبنية على معايير ميتا الرسمية، من التوثيق إلى الربط التقني الكامل.
          </p>
        </div>

        <div className="mt-10">
          <h3 className="mb-4 font-mono text-[12px] text-blue-500">التوثيق والاعتماد</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {verification.map((s) => (
              <ServiceCard key={s.path} service={s} />
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="mb-4 font-mono text-[12px] text-blue-500">التطوير والتكامل التقني</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {integration.map((s) => (
              <ServiceCard key={s.path} service={s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}