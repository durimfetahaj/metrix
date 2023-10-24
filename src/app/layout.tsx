import Providers from "@/components/Providers";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
      <Providers>
        <body
          className={cn("min-h-screen font-sans antialiased ", inter.className)}
        >
          <Toaster />
          <main>{children}</main>
        </body>
      </Providers>
    </html>
  );
}
