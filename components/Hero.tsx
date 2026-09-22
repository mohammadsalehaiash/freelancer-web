import Image from "next/image";
import shieldImage from "../app/imgs/image.png";

const stats = [
  { value: "92٪", label: "نسبة القبول من أول طلب" },
  { value: "240+", label: "نشاطًا تجاريًا وثّقناه" },
  { value: "3-10 أيام", label: "متوسط مدة إنجاز التحقق" },
];

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-content px-6 pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="grid items-center gap-14 md:grid-cols-[0.9fr_1.1fr]">
        {/* Image */}
        <div className="order-2 flex justify-center md:order-1">
          <Image
            src={shieldImage}
            alt="نشاط موثّق على ميتا"
            width={805}
            height={690}
            className="h-auto w-full max-w-md object-contain"
            priority
          />
        </div>

        {/* Text content */}
        <div className="order-1 md:order-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[13px] text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            متخصصون في توثيق الأنشطة التجارية على ميتا
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.35] text-white md:text-5xl">
            نوثّق نشاطك التجاري على <span className="text-blue-500">ميتا</span> بدون تعقيد ولا رفض
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-400">
            من تجهيز الأوراق إلى تفعيل شارة التوثيق، نتولى كامل إجراءات التحقق
            التقني لحسابك على فيسبوك وانستقرام وواتساب بيزنس — بخطوات واضحة
            ومتابعة لحق الاعتماد.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            
             <a href="#contact"
              className="rounded-lg bg-blue-600 px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-blue-700"
            >
              ابدأ إجراءات التوثيق
            </a>
            
            <a  href="#process"
              className="rounded-lg border border-white/15 px-6 py-3 text-[15px] text-slate-200 transition-colors hover:border-white/30 hover:bg-white/5"
            >
              تعرّف على آلية العمل
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-white md:text-3xl">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}