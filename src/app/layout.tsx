import type { Metadata } from "next";
import { IBM_Plex_Sans_KR, Orbit, Source_Code_Pro } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";

// Base keywords that will be merged with page-specific keywords
export const baseKeywords = ["blog", "development", "journal", "개발", "블로그"];

// Utility function to merge base keywords with page-specific keywords
export function mergeKeywords(pageKeywords: string[] = []): string[] {
  return [...new Set([...baseKeywords, ...pageKeywords])];
}

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
  title: {
    default: "My sweet little blog",
    template: "%s | My sweet little blog",
  },
  description: "Welcome to my Journal",
  keywords: baseKeywords,
  authors: [{ name: "EJ" }],
  creator: "EJ",
  publisher: "EJ",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    title: "My sweet little blog",
    description: "Welcome to my Journal",
    siteName: "My sweet little blog",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
