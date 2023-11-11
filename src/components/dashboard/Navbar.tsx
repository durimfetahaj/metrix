"use client";

import Link from "next/link";
import { MenuItem, dashboardNavLinks } from "../layout/navbar/menu";

const DashboardNavbar = ({ role }: { role: string }) => {
  if (role === "customer") {
    return (
      <ul className="hidden md:flex gap-4 text-neutral-400  items-center">
        <li>
          <Link
            className="underline-offset-4 hover:underline text-neutral-400 hover:text-neutral-300"
            href="/dashboard/orders"
          >
            Orders
          </Link>
        </li>
        <li>
          <Link
            className="underline-offset-4 hover:underline text-neutral-400 hover:text-neutral-300"
            href="/dashboard/settings"
          >
            Settings
          </Link>
        </li>
      </ul>
    );
  }

  return (
    <ul className="hidden md:flex gap-4 text-neutral-400  items-center">
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
  );
};

export default DashboardNavbar;
