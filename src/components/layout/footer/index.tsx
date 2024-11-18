"use client";

import { cn } from "@/lib/utils";
import FooterMenu from "./footer-menu";
import { usePathname } from "next/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : "");
  const copyrightName = "Metrix";
  const pathname = usePathname();
  const isDashboard = pathname.includes("/dashboard");

  return (
    <footer
      className={cn(
        "text-sm text-neutral-500 dark:text-neutral-400 ",
        isDashboard ? "hidden" : "block"
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6   px-6 py-12 text-sm md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0">
        {/* <FooterMenu /> */}
      </div>
      <div className="border-t py-6 text-sm border-neutral-700">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
          <p>
            &copy; {copyrightDate} {copyrightName}
            {copyrightName.length && !copyrightName.endsWith(".")
              ? "."
              : ""}{" "}
            All rights reserved.
          </p>

          <p className="md:ml-auto">
            Crafted by{" "}
            <a
              href="https://durimf-portfolio.vercel.app/"
              className="text-black dark:text-white"
              target="_blank"
            >
              Durim
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
