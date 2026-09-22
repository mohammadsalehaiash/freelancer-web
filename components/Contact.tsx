"use client";

import { useState, FormEvent } from "react";

const WHATSAPP_NUMBER = "966545692545"; 
const CONTACT_EMAIL = "hello@mowthooq.example"; 

const serviceOptions = [
  "توثيق النشاط التجاري",
  "إنشاء تطبيق Facebook Developers",
  "Facebook Login / OAuth",
  "واتساب بيزنس API",
  "شات بوت ماسنجر أو واتساب",
  "Meta Pixel و Conversion API",
  "غير ذلك",
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const contact = form.get("contact");
    const service = form.get("service");
    const message = form.get("message");

    const subject = encodeURIComponent(`طلب خدمة: ${service}`);
    const body = encodeURIComponent(
      `الاسم: ${name}\nوسيلة التواصل: ${contact}\nالخدمة: ${service}\n\n${message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="border-t border-line bg-ink py-20 text-paper">
      <div className="mx-auto grid max-w-content gap-12 px-6 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="font-display text-3xl">تواصل معنا</h2>
          <p className="mt-3 max-w-sm leading-relaxed text-paper/70">
            وصف مختصر لحالة حسابك أو مشروعك يكفي نبدأ فيه. نرد عادة خلال يوم عمل.
          </p>

          <div className="mt-8 space-y-3 font-mono text-sm">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-fit border-b border-seal text-seal transition-colors hover:text-paper"
            >
              واتساب: {WHATSAPP_NUMBER}
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="block w-fit border-b border-paper/30 text-paper/85 transition-colors hover:border-seal hover:text-seal"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              name="name"
              required
              placeholder="الاسم"
              className="border border-paper/25 bg-transparent px-4 py-3 text-[15px] text-paper placeholder:text-paper/50 focus:border-seal"
            />
            <input
              name="contact"
              required
              placeholder="واتساب أو بريد إلكتروني"
              className="border border-paper/25 bg-transparent px-4 py-3 text-[15px] text-paper placeholder:text-paper/50 focus:border-seal"
            />
          </div>

          <select
            name="service"
            defaultValue=""
            required
            className="border border-paper/25 bg-ink px-4 py-3 text-[15px] text-paper focus:border-seal"
          >
            <option value="" disabled>
              اختر الخدمة
            </option>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>

          <textarea
            name="message"
            rows={4}
            placeholder="اكتب تفاصيل طلبك"
            className="border border-paper/25 bg-transparent px-4 py-3 text-[15px] text-paper placeholder:text-paper/50 focus:border-seal"
          />

          <button
            type="submit"
            className="w-fit rounded-sm bg-seal px-6 py-3 text-[15px] font-medium text-paper transition-colors hover:bg-seal-dark"
          >
            إرسال الطلب
          </button>

          {sent && (
            <p className="text-[13px] text-seal">
              تم فتح تطبيق البريد لإتمام الإرسال. إذا ما فتح تلقائيًا، تواصل معنا مباشرة عبر واتساب.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
