import Link from "next/link";
import React from "react";

import Cart from "@/components/cart";
import MobileMenu from "./layout/navbar/mobile-menu";
import {
  getKindeServerSession,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import UserMenu from "./layout/navbar/UserMenu";
import { buttonVariants } from "./ui/button";
import Search from "./Search";

interface MainNavbarProps {
  isHomePage: boolean;
}

export function MainNavbar() {
  const { isAuthenticated } = getKindeServerSession();

  return (
    <nav className="mb-8 sticky h-20 inset-x-0 top-0 z-30 w-full border-b dark:border-zinc-700 backdrop-blur-lg transition-all">
      <div className="flex items-center h-20 px-4 md:px-6">
        {/* mobile menu */}
        <div className="block md:hidden">
          <MobileMenu />
        </div>

        {/* desktop navbar */}
        <div className="flex w-full items-center ">
          <div className="flex w-1/2 justify-center items-end md:justify-start md:gap-5 md:w-1/3  ">
            <Link href="/" className="z-40 font-semibold">
              Metrix.
            </Link>

            <ul className="space-x-5 text-sm text-gray-400">
              <Link href="/search">All</Link>
              <Link href="/search/phones">Phones</Link>
              <Link href="/search/laptops">Laptops</Link>
            </ul>
          </div>
          <div className="hidden md:flex md:w-1/3 ">
            <Search />
          </div>
          <div className="flex items-center justify-end gap-2.5 w-1/2 md:w-1/3">
            <Cart />

            {isAuthenticated() ? (
              <UserMenu />
            ) : (
              <LoginLink
                className={buttonVariants({
                  size: "sm",
                })}
              >
                Sign in
              </LoginLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MainNavbar;