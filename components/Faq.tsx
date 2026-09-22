"use client";

import { useState } from "react";

const faqs = [
  {
    q: "ما المستندات المطلوبة للتحقق؟",
    a: "سجل تجاري ساري، إثبات عنوان النشاط، وبيانات المسؤول القانوني. قد تختلف المتطلبات حسب الدولة ونوع النشاط، ونحددها لك في جلسة التقييم الأولية.",
  },
  {
    q: "ماذا لو تم رفض طلبي سابقًا؟",
    a: "نراجع سبب الرفض في مراسلات ميتا، نعالج نقطة الرفض تحديدًا سواء كانت في المستندات أو إعدادات الحساب، ثم نعيد تقديم الطلب بملف معدّل يطابق المتطلبات.",
  },
  {
    q: "كم تستغرق عملية التحقق كاملة؟",
    a: "غالبًا بين 3 إلى 10 أيام عمل من اكتمال المستندات، حسب حجم النشاط ومدى استجابة ميتا لطلبات المراجعة الإضافية.",
  },
  {
    q: "هل تقدّمون الخدمة لحسابات خارج السعودية؟",
    a: "نعم، نقدّم الخدمة لأي نشاط تجاري مسجّل رسميًا بغض النظر عن الدولة، مع مراعاة المستندات التي يطلبها نظام ميتا لكل دولة.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-content px-6 py-20">
      <h2 className="font-display text-3xl font-bold text-white">الأسئلة الشائعة</h2>
      <p className="mt-3 max-w-lg text-slate-400">
        أكثر ما يُسأل عن خدمة التحقق من النشاط التجاري.
      </p>

      <div className="mt-8 border-t border-white/10">
        {faqs.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={item.q} className="border-b border-white/10">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 py-5 text-right"
              >
                <span className="font-display text-lg text-white">{item.q}</span>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-2xl leading-none text-blue-500 transition-transform"
                  style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                >
                  +
                </span>
              </button>
              {isOpen && (
                <p className="max-w-2xl pb-5 text-[15px] leading-relaxed text-slate-400">
                  {item.a}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}