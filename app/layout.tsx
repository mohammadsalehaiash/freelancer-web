import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// الخط الأساسي للموقع
const alanSans = localFont({
  src: "./fonts/Alan_Sans/AlanSans-VariableFont_wght.ttf",
  variable: "--font-alan-sans",
  display: "swap",
});

const almarai = localFont({
  src: [
    { path: "./fonts/Almarai/Almarai-Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/Almarai/Almarai-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Almarai/Almarai-Bold.ttf", weight: "700", style: "normal" },
    { path: "fonts/Almarai/Almarai-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-almarai",
  display: "swap",
});

const amiri = localFont({
  src: [
    { path: "./fonts/Amiri/Amiri-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Amiri/Amiri-Italic.ttf", weight: "400", style: "italic" },
    { path: "./fonts/Amiri/Amiri-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/Amiri/Amiri-BoldItalic.ttf", weight: "700", style: "italic" },
  ],
  variable: "--font-amiri",
  display: "swap",
});

const ibmPlexSansArabic = localFont({
  src: [
    { path: "./fonts/IBM_Plex_Sans_Arabic/IBMPlexSansArabic-Thin.ttf", weight: "100", style: "normal" },
    { path: "./fonts/IBM_Plex_Sans_Arabic/IBMPlexSansArabic-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "./fonts/IBM_Plex_Sans_Arabic/IBMPlexSansArabic-Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/IBM_Plex_Sans_Arabic/IBMPlexSansArabic-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/IBM_Plex_Sans_Arabic/IBMPlexSansArabic-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/IBM_Plex_Sans_Arabic/IBMPlexSansArabic-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/IBM_Plex_Sans_Arabic/IBMPlexSansArabic-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-ibm-plex-sans-arabic",
  display: "swap",
});

const robotoCondensed = localFont({
  src: [
    { path: "./fonts/Roboto_Condensed/RobotoCondensed-VariableFont_wght.ttf", weight: "100 900", style: "normal" },
    { path: "./fonts/Roboto_Condensed/RobotoCondensed-Italic-VariableFont_wght.ttf", weight: "100 900", style: "italic" },
  ],
  variable: "--font-roboto-condensed",
  display: "swap",
});

const API = "https://qatrah.org.sa";

async function getSettings() {
  try {
    const res = await fetch(`${API}/settings`, { cache: 'no-store' });
    const json = await res.json();
    return json?.data || null;
  } catch {
    return null;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings();
  return {
    title: settings?.site_name || 'الموقع',
    description: settings?.site_description || '',
    icons: {
      icon: '/api/favicon',
    },
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${alanSans.variable} ${almarai.variable} ${amiri.variable} ${ibmPlexSansArabic.variable} ${robotoCondensed.variable}`}
    >
      <body style={{ fontFamily: "var(--font-alan-sans), sans-serif" }} className="antialiased">
        {children}
      </body>
    </html>
  );
}
