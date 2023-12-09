"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const FooterMenuItem = ({ item }: { item: any }) => {
  const pathname = usePathname();
  const [active, setActive] = useState(pathname === item.path);

  useEffect(() => {
    setActive(pathname === item.path);
  }, [pathname, item.path]);

  return (
    <li>
      <Link
        href={item.path}
        className={clsx(
          "block p-2 text-lg underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300 md:inline-block md:text-sm",
          {
            "text-black dark:text-neutral-300": active,
          }
        )}
      >
        {item.title}
      </Link>
    </li>
  );
};

export default function FooterMenu() {
  const menu = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Terms & Conditions",
      path: "/terms-conditions",
    },
    {
      title: "Shipping & Return Policy",
      path: "/shipping-return-policy",
    },
    {
      title: "Privacy Policy",
      path: "/privacy-policy",
    },
    {
      title: "FAQ",
      path: "/frequently-asked-questions",
    },
  ];

  return (
    <nav>
      <ul>
        {menu.map((item: any) => {
          return <FooterMenuItem key={item.title} item={item} />;
        })}
      </ul>
    </nav>
  );
}
