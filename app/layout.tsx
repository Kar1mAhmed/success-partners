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
  title: "شركاء النجاح | حلول متكاملة في العراق",
  description: "شركة عراقية رائدة في تقديم حلول متكاملة في الخدمات الهندسية، التطوير العقاري، الوكالات التجارية، والتجارة العامة. نبني النجاح معاً في بغداد والعراق",
  keywords: [
    "شركاء النجاح",
    "Success Partners Iraq",
    "شركات هندسية في العراق",
    "تطوير عقاري بغداد",
    "وكالات تجارية العراق",
    "استشارات هندسية",
    "إدارة مشاريع",
    "تصميم معماري",
    "تجارة عامة العراق",
    "استيراد وتصدير",
    "حلول متكاملة",
    "شركات بغداد"
  ],
  authors: [{ name: "شركاء النجاح", url: "https://successpartners-iq.com" }],
  creator: "شركاء النجاح",
  publisher: "شركاء النجاح",
  metadataBase: new URL('https://successpartners-iq.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "شركاء النجاح | حلول متكاملة في العراق",
    description: "شركة عراقية رائدة في تقديم حلول متكاملة في الخدمات الهندسية، التطوير العقاري، الوكالات التجارية، والتجارة العامة",
    type: "website",
    locale: "ar_IQ",
    url: "https://successpartners-iq.com",
    siteName: "شركاء النجاح",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "شركاء النجاح - حلول متكاملة في العراق",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "شركاء النجاح | حلول متكاملة في العراق",
    description: "شركة عراقية رائدة في تقديم حلول متكاملة في الخدمات الهندسية، التطوير العقاري، الوكالات التجارية، والتجارة العامة",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#154762" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="شركاء النجاح" />
      </head>
      <body className={cairo.variable}>
        {children}
      </body>
    </html>
  );
}
