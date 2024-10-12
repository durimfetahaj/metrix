import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainNavbar from "@/components/main-navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Metrix App",
  description: "Metrix E-commerce App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn("min-h-screen font-sans antialiased", inter.className)}
      >
        <Toaster />
        <main className="bg-neutral-900">{children}</main>
        <SpeedInsights />
      </body>
    </html>
  );
}
