# موثوق — موقع الخدمة

مبني بـ Next.js (App Router) + Tailwind CSS، وواجهة عربية بالكامل (RTL).

## التشغيل محليًا

```bash
npm install
npm run dev
```

ثم افتح http://localhost:3000

## قبل النشر

- عدّل `WHATSAPP_NUMBER` و `CONTACT_EMAIL` في:
  - `components/Contact.tsx`
  - `components/CtaBanner.tsx`
- راجع نصوص الأسئلة الشائعة في `components/Faq.tsx` — الإجابات الثلاث الأخيرة كُتبت بالاستنتاج من محتوى الموقع لأن النص الأصلي كان مطويًا خلف زر "+"، فتأكد من دقتها.

## هيكل الملفات

```
app/
  layout.tsx      # الهيكل العام + خط Tajawal + اتجاه RTL
  page.tsx         # يجمع كل الأقسام بالترتيب
  globals.css       # Tailwind + تأثيرات الختم (seal-ring / stamp-in / rise-in)
components/
  Header.tsx
  Hero.tsx
  Services.tsx
  ServiceCard.tsx
  Process.tsx
  WhyUs.tsx         # جديد — قسم "لماذا موثوق"
  Faq.tsx           # جديد — الأسئلة الشائعة (أكورديون)
  CtaBanner.tsx     # جديد — دعوة الحجز قبل نموذج التواصل
  Contact.tsx
  Footer.tsx
tailwind.config.ts  # ألوان ink/paper/seal/gold/line/card والخطوط
```
