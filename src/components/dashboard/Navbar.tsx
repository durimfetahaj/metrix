import Link from "next/link";
import UserMenu from "../layout/navbar/UserMenu";
import dashboardNavLinks from "./utils/dashboard-nav-links";
import { MenuItem } from "@/types";

const DashboardNavbar = () => {
  return (
    <nav className="flex items-center justify-between mb-8 sticky h-20 inset-x-0 top-0 z-30 w-full border-b dark:border-zinc-700 backdrop-blur-lg transition-all px-4 md:px-6">
      <ul className="hidden md:flex gap-4 text-neutral-400 items-center flex-1 justify-center">
        {dashboardNavLinks.map((menu: MenuItem) => (
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
      <div className="text-neutral-400">
        <UserMenu isDashboard />
      </div>
    </nav>
  );
};

export default DashboardNavbar;
