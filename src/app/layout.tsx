import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/layout/navbar";

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
        className={cn("min-h-screen font-sans antialiased ", inter.className)}
      >
        <Toaster />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
