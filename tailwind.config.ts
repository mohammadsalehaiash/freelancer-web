import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#14211C",
        "ink-soft": "#4C564F",
        paper: "#F6F4EA",
        card: "#FBFAF3",
        seal: "#0E6B5C",
        "seal-dark": "#0A4F44",
        gold: "#B9862E",
        line: "#DEDCD2",
      },
      fontFamily: {
        /* 🟢 تم التعديل هنا لتقرأ الخط الممرر من الـ Layout الخاص بك '--font-alan-sans' */
        sans: ["var(--font-alan-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-alan-sans)", "system-ui", "sans-serif"],
        
        /* 🟢 تسجيل بقية الخطوط المحلية لتتمكن من استخدامها كـ كلاسات مثل font-almarai */
        almarai: ["var(--font-almarai)", "sans-serif"],
        amiri: ["var(--font-amiri)", "serif"],
        ibm: ["var(--font-ibm-plex-sans-arabic)", "sans-serif"],
        roboto: ["var(--font-roboto-condensed)", "sans-serif"],

        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Consolas",
          "monospace",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};

export default config;
