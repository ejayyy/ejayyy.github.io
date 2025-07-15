import type { Metadata } from "next";
import { IBM_Plex_Sans_KR } from "next/font/google";
import ThemeToggle from "@/components/ThemeToggle";
import "./globals.css";

const ibmPlexSansKR = IBM_Plex_Sans_KR({
  variable: "--font-ibm-plex-sans-kr",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
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
      <body className={`${ibmPlexSansKR.variable} antialiased`}>
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
