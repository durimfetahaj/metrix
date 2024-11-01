"use client";

import { Product } from "@prisma/client";

import { Button } from "./button";
import { Icons } from "@/components/Icons";
import useCart from "@/hooks/use-cart";

interface AddToCartButtonProps {
  data: Product;
}

export const AddToCartButton = ({ data }: AddToCartButtonProps) => {
  const { addItem, openCart } = useCart();

  return (
    <Button
      className="rounded-3xl h-[50px] w-full"
      onClick={() => {
        addItem(data);
        openCart();
      }}
    >
      <div className="flex items-center w-full">
        <Icons.plus className="mr-2 h-5 w-5" />
        <span className="flex-grow text-center">Add To Cart</span>
      </div>
    </Button>
  );
};
