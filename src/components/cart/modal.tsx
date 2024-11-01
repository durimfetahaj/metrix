"use client";
import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

import { Icons } from "@/components/Icons";
import useCart from "@/hooks/use-cart";
import { CartItem } from "./cart-item";
import { CurrencyFormatter } from "@/lib/utils";

export default function CartModal() {
  const { items, isOpen, openCart, closeCart, totalAmount } = useCart();

  return (
    <div>
      <button
        aria-label="Open cart"
        onClick={openCart}
        className="flex h-10 w-10 items-center justify-center rounded-md border border-zinc-700 relative"
      >
        <Icons.cart className="h-4 w-4 transition-all ease-in-out hover:scale-110" />
        {items.length > 0 && (
          <Badge className="absolute -top-4 -right-2">{items.length}</Badge>
        )}
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeCart} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="fixed bottom-0 right-0 top-0 flex gap-10 h-full w-full flex-col border-l border-neutral-200 bg-white/80 p-6 text-black backdrop-blur-xl dark:border-neutral-700 dark:bg-black/80 dark:text-white md:w-[390px]">
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold">My Cart</p>
                <button
                  onClick={closeCart}
                  className="flex h-11 w-11 items-center justify-center rounded-md border"
                >
                  <Icons.cross className="transition-all ease-in-out hover:scale-110" />
                </button>
              </div>

              {items.length === 0 ? (
                <div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
                  <Icons.cart className="h-16 w-16 " />
                  <p className="mt-6 text-center text-2xl font-bold">
                    Your cart is empty.
                  </p>
                </div>
              ) : (
                <div className="h-full flex flex-col">
                  <ul className="flex-grow overflow-auto py-4">
                    {items.map((item) => (
                      <CartItem key={item.id} data={item} />
                    ))}
                  </ul>

                  <div className="py-4 text-sm text-neutral-500 dark:text-neutral-400">
                    <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
                      <p>Total</p>
                      <CurrencyFormatter amount={String(totalAmount)} />
                    </div>
                  </div>
                  <Link
                    href="/checkout"
                    className="block w-full rounded-full bg-primary hover:cursor-pointer p-3 text-center text-sm  text-primary-foreground font-medium opacity-90 hover:opacity-100"
                  >
                    Proceed to Checkout
                  </Link>
                </div>
              )}
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  );
}
