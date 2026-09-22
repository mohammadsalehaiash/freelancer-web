export default function Header() {
  const links = [
    { href: "#services", label: "الخدمات" },
    { href: "#process", label: "آلية العمل" },
    // { href: "#why", label: "لماذا موثوق" },
    // { href: "#why", label: "اعمالنا" },
    { href: "#faq", label: "الأسئلة الشائعة" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0B0F1A]/95 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="text-xl font-bold text-white">موثوق</span>
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M5 13l4 4L19 7"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            
              <a key={link.href}
              href={link.href}
              className="text-[15px] text-slate-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        
        <a href="#contact"
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-[15px] font-medium text-white transition-colors hover:bg-blue-700"
        >
          احجز استشارة
        </a>
      </div>
    </header>
  );
}