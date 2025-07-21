import type { Metadata } from "next";
import { IBM_Plex_Sans_KR, Orbit, Source_Code_Pro } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const ibmPlexSansKR = IBM_Plex_Sans_KR({
  variable: "--font-ibm-plex-sans-kr",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  fallback: ["Orbit"],
});

const orbit = Orbit({
  variable: "--font-orbit",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "My sweet little blog",
  description: "Welcome to my Journal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${ibmPlexSansKR.variable} ${sourceCodePro.variable} ${orbit.variable}`}
      >
        <div className="max-w-3xl mx-auto px-4 py-8">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
