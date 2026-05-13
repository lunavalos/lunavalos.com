import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "@/i18n/request";
import SchemaOrg from "@/components/SchemaOrg";
import Preloader from "@/components/Preloader";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "@/app/globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: "Index" });

  return {
    title: {
      template: "%s | LunAvalos Digital House",
      default: "LunAvalos Digital House",
    },
    description: t("description"),
    metadataBase: new URL("https://lunavalos.com"),
    icons: {
      icon: "/images/favicon.png",
      shortcut: "/images/favicon.png",
      apple: "/images/favicon.png",
    },
    alternates: {
      canonical: "/",
      languages: {
        es: "/es",
        en: "/en",
        pt: "/pt",
        fr: "/fr",
        zh: "/zh",
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  
  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${rubik.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-black text-white selection:bg-indigo-500/30">
        <Preloader />
        <SchemaOrg />
        <NextIntlClientProvider messages={messages}>
          {children}
          <Footer />
        </NextIntlClientProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
