"use client";

// import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";
// import { Icons } from "@/components/Icons";
// import Search from "@/components/Search";
// import { MenuItem } from "@/types/types";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import menu from "./menu";

export default function MobileMenu() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isShowing, setIsShowing] = useState(false);
  const closeMobileMenu = () => setIsShowing(false);
  const openMobileMenu = () => setIsShowing(true);

  useEffect(() => {
    setIsShowing(false);
  }, [pathname, searchParams]);

  return (
    <>
      <button
        className="flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white"
        onClick={openMobileMenu}
        aria-label="Close mobile menu"
      >
        {/* <Icons.mobileMenu /> */}
      </button>
      {/* <Transition show={isShowing}>
        <Transition.Child
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        </Transition.Child>

        <Transition.Child
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
          className="fixed top-0 right-0 h-full w-full z-50 bg-white"
        >
          <div className="p-4">
            <button
              className="flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white mb-4 "
              onClick={closeMobileMenu}
              aria-label="Close mobile menu"
            >
              <Icons.CrossIcon />
            </button>
            <Search />

            {menu.length ? (
              <ul className="flex w-full flex-col mt-4">
                {menu.map((item: MenuItem) => (
                  <li
                    className="py-2 text-xl text-black transition-colors hover:text-neutral-500 dark:text-white"
                    key={item.label}
                  >
                    <Link href={item.url} onClick={closeMobileMenu}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </Transition.Child>
      </Transition> */}
    </>
  );
}
