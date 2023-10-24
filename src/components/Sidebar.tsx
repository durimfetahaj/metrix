"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Icons } from "./Icons";
import { Button } from "./ui/button";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const pathName = usePathname();

  const navItems = [
    {
      id: 0,
      href: "/dashboard",
      label: "Dashboard",
      icon: <Icons.dashboard />,
    },
    {
      id: 1,
      href: "/dashboard/orders",
      label: "Orders",
      icon: <Icons.cart />,
    },
    {
      id: 2,
      href: "/dashboard/customers",
      label: "Customers",
      icon: <Icons.user />,
    },
    {
      id: 3,
      href: "/dashboard/inventory",
      label: "Inventory",
      icon: <Icons.inventory />,
    },
    {
      id: 4,
      href: "/dashboard/conversations",
      label: "Conversations",
      icon: <Icons.conversations />,
    },
    {
      id: 5,
      href: "/dashboard/settings",
      label: "Settings",
      icon: <Icons.settings />,
    },
  ];

  return (
    <div
      className={cn(
        "h-screen border-r border-zinc-700 transition-w ease-in duration-200",
        isOpen ? "w-[300px]" : "w-[100px]"
      )}
    >
      <div
        className={cn(
          "flex flex-col h-full gap-16 px-4 py-1.5 md:py-4 md:px-6"
        )}
      >
        <p className="font-semibold px-2">Metrix.</p>
        <ul className={cn("flex flex-col flex-1 space-y-4")}>
          {navItems.map(({ id, href, icon, label }) => (
            <Link
              key={id}
              href={href}
              className={cn(
                "flex gap-4 py-4 px-5 p-3 rounded-md transition-colors duration-200 ease-in",
                pathName === href && "bg-primary"
              )}
            >
              <p>{icon}</p>
              <p
                className={cn(
                  isOpen
                    ? "visible transition-all delay-200 ease-in"
                    : "invisible transition-all ease-out"
                )}
              >
                {label}
              </p>
            </Link>
          ))}
        </ul>
        <div className="flex justify-end">
          <Button
            variant="ghost"
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          >
            {isOpen ? <Icons.sideBarClose /> : <Icons.sidebarOpen />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
