// import Search from "@/components/Search";
// import Cart from "@/components/cart";
// import { MenuItem } from "@/types/types";
import Cart from "@/components/cart";
import { buttonVariants } from "@/components/ui/button";
import {
  LoginLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import UserMenu from "./UserMenu";
import menu, { MenuItem } from "./menu";
import MobileMenu from "./mobile-menu";
import Search from "@/components/Search";
import DashboardNavbar from "@/components/dashboard/Navbar";

const Navbar = ({
  role,
  isDashboard,
}: {
  role?: string;
  isDashboard?: boolean;
}) => {
  const { isAuthenticated } = getKindeServerSession();

  if (isDashboard && role && isAuthenticated()) {
    return (
      <nav className="h-20 w-full border-b dark:border-zinc-700 bg-background/75">
        <div className=" container h-full w-full flex items-center justify-between px-5">
          <p>Metrix.</p>
          <DashboardNavbar role={role} />
          <div>
            <UserMenu />
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="mb-8 sticky h-20 inset-x-0 top-0 z-30 w-full border-b dark:border-zinc-700 bg-background/75 backdrop-blur-lg transition-all">
      <div className="flex items-center h-20 px-4 md:px-6">
        {/* mobile menu */}
        <div className="block md:hidden">
          <MobileMenu />
        </div>

        {/* desktop navbar */}
        <div className="flex w-full items-center ">
          <div className="flex w-1/2 justify-center md:justify-start md:gap-5 md:w-1/3  ">
            <Link href="/" className="z-40 font-semibold">
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
};

export default Navbar;
