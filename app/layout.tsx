import type { Metadata } from "next";
import "./globals.css";
import { ThemeScript } from "@/components/ThemeScript";
import { LenisProvider } from "@/components/LenisProvider";

export const metadata: Metadata = {
  title: "Vaibhav Dange — Software Developer",
  description:
    "Full-stack & mobile software developer with 2.5+ years of experience in web, mobile apps, and cloud.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="noise">
        <LenisProvider />
        {children}
      </body>
    </html>
  );
}
