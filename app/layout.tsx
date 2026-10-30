import "./globals.css";

import {
  LanguageProvider,
} from "@/components/i18n/LanguageProvider";

import type {
  Metadata,
} from "next";

import {
  Inter,
} from "next/font/google";

import AnalyticsTracker from "@/components/analytics/AnalyticsTracker";

const inter =
  Inter({
    subsets: ["latin"],
  });


export const metadata:
  Metadata = {
  title: {
    default:
      "Analit | Ecossistema científico",

    template:
      "%s | Analit",
  },

  description:
    "Ecossistema de plataformas digitais voltadas ao ensino, à pesquisa e à análise científica.",
};


export default function RootLayout({
  children,
}: {
  children:
    React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
  className={
    inter.className
  }
>
<LanguageProvider>
  <AnalyticsTracker />

  {children}
</LanguageProvider>
</body>
    </html>
  );
}