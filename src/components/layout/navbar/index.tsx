// import Search from "@/components/Search";
// import Cart from "@/components/cart";
// import { MenuItem } from "@/types/types";
import Link from "next/link";
import menu, { MenuItem } from "./menu";
import MobileMenu from "./mobile-menu";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  RegisterLink,
  LoginLink,
  getKindeServerSession,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import UserMenu from "./UserMenu";
import Cart from "@/components/cart";

const Navbar = () => {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = getUser();

  return (
    <nav className="sticky h-20 inset-x-0 top-0 z-30 w-full border-b dark:border-zinc-700 bg-background/75 backdrop-blur-lg transition-all">
      <div className="flex h-20 px-6">
        {/* mobile menu */}
        <div className="block md:hidden">
          <MobileMenu />
        </div>

        {/* desktop navbar */}
        <div className="flex justify-between w-full  items-center">
          <div className="flex gap-10">
            <Link href="/" className="flex z-40 font-semibold">
              Metrix.
            </Link>

            {menu?.length ? (
              <ul className="hidden md:flex gap-4 text-neutral-400  items-center">
                {menu.map((menu: MenuItem) => (
                  <li key={menu.label}>
                    <Link
                      className="underline-offset-4 hover:underline text-neutral-400 hover:text-neutral-300"
                      href={menu.url}
                    >
                      {menu.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <div className="hidden md:flex md:w-1/3 ">{/* <Search /> */}</div>
          <div className="flex items-center gap-2.5">
            <Cart />

            {isAuthenticated() ? (
              <UserMenu user={user} />
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
};

export default Navbar;
