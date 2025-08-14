import type { Metadata } from "next";
import { Orbit, Source_Code_Pro } from "next/font/google";
import Footer from "@/components/Footer";
import { baseKeywords } from "@/lib/metadata-utils";
import "./globals.css";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Asta+Sans:wght@400;500;600&family=Cascadia+Code:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Asta+Sans:wght@100;200;300;700&family=Cascadia+Code:wght@200;300;500;700&display=swap"
          rel="stylesheet"
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Asta+Sans:wght@100;200;300;700&family=Cascadia+Code:wght@200;300;500;700&display=swap"
            rel="stylesheet"
          />
        </noscript>
      </head>
      <body className={`${orbit.variable} ${sourceCodePro.variable}`}>
        <div className="max-w-3xl mx-auto px-4 py-8">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
