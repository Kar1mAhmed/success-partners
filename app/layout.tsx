import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Success Partners | Leading Iraqi Company in Integrated Services",
  description: "Success Partners is an Iraqi company specializing in engineering services, real estate development and marketing, commercial agencies, and general trade. We provide professional and strategic solutions to achieve success.",
  keywords: "Success Partners, Iraq, engineering services, real estate development, commercial agencies, general trade",
  authors: [{ name: "Success Partners" }],
  openGraph: {
    title: "Success Partners | Leading Iraqi Company",
    description: "An Iraqi company leading in providing integrated solutions",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={archivo.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
