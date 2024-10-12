"use client";

import { PlusIcon } from "lucide-react";
import { Button } from "./button";

export const AddToCartButton = () => {
  return (
    <Button
      className="rounded-3xl h-[50px] w-full"
      onClick={() => alert("add to cart triggered")}
    >
      <div className="flex items-center w-full">
        <PlusIcon className="mr-2 h-5 w-5" />
        <span className="flex-grow text-center">Add To Cart</span>
      </div>
    </Button>
  );
};
