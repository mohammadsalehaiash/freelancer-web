const footerServices = [
  { href: "#services", label: "التحقق من النشاط التجاري" },
  { href: "#services", label: "ربط واتساب بيزنس API" },
  { href: "#services", label: "شات بوت ماسنجر" },
  { href: "#services", label: "متجر Meta Shop" },
];

const footerCompany = [
  { href: "#why-us", label: "لماذا موثوق" },
  { href: "#process", label: "آلية العمل" },
  { href: "#faq", label: "الأسئلة الشائعة" },
  { href: "#contact", label: "تواصل معنا" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line/20 bg-ink py-14 text-paper/70">
      <div className="mx-auto max-w-content px-6">
        <div className="grid gap-10 sm:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <span className="font-display text-xl font-semibold text-paper">موثوق</span>
            <p className="mt-3 max-w-xs text-[14px] leading-relaxed">
              خدمات تقنية متخصصة في توثيق وتشغيل الأنشطة التجارية على منصات ميتا:
              فيسبوك، انستقرام، وواتساب بيزنس.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[12px] text-paper/90">الخدمات</h4>
            <ul className="mt-3 space-y-2 text-[14px]">
              {footerServices.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="transition-colors hover:text-seal">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[12px] text-paper/90">الشركة</h4>
            <ul className="mt-3 space-y-2 text-[14px]">
              {footerCompany.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="transition-colors hover:text-seal">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-paper/10 pt-6 text-[13px] sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} موثوق. جميع الحقوق محفوظة.</span>
          <span>هذا الموقع مستقل وغير تابع رسميًا لشركة Meta.</span>
        </div>
      </div>
    </footer>
  );
}
