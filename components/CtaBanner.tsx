const WHATSAPP_NUMBER = "966545692545"; // نفس الرقم المستخدم في Contact.tsx
const CONTACT_EMAIL = "hello@mowthooq.example"; // نفس البريد المستخدم في Contact.tsx

export default function CtaBanner() {
  return (
    <section className="border-y border-line bg-card py-16">
      <div className="mx-auto flex max-w-content flex-col items-start gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-display text-2xl text-ink md:text-3xl">
            جاهز توثّق نشاطك التجاري؟
          </h2>
          <p className="mt-2 max-w-md text-ink-soft">
            احجز استشارة مجانية مدتها 15 دقيقة، نراجع فيها حسابك الحالي ونوضح لك
            خطوات التوثيق المناسبة لحالتك.
          </p>
        </div>

        <div className="flex shrink-0 flex-wrap gap-4">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm bg-seal px-6 py-3 text-[15px] font-medium text-paper transition-colors hover:bg-seal-dark"
          >
            تواصل عبر واتساب
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="rounded-sm border border-ink px-6 py-3 text-[15px] text-ink transition-colors hover:border-seal hover:text-seal"
          >
            راسلنا عبر البريد
          </a>
        </div>
      </div>
    </section>
  );
}
