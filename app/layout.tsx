import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "شركاء النجاح | شركة عراقية رائدة في الخدمات المتكاملة",
  description: "شركة شركاء النجاح هي شركة عراقية متخصصة في الخدمات الهندسية، التطوير والتسويق العقاري، الوكالات التجارية، والتجارة العامة. نقدم حلول احترافية واستراتيجية لتحقيق النجاح.",
  keywords: "شركاء النجاح, العراق, خدمات هندسية, تطوير عقاري, وكالات تجارية, تجارة عامة",
  authors: [{ name: "شركاء النجاح" }],
  openGraph: {
    title: "شركاء النجاح | شركة عراقية رائدة",
    description: "شركة عراقية رائدة في تقديم الحلول المتكاملة",
    type: "website",
    locale: "ar_IQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
