import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "@/i18n/request";
import SchemaOrg from "@/components/SchemaOrg";
import Preloader from "@/components/Preloader";
import Footer from "@/components/Footer";
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
    title: t("title"),
    description: t("description"),
    metadataBase: new URL("https://lunavalos.com"),
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
      </body>
    </html>
  );
}
