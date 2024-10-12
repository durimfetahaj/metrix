"use client";

import { MoreHorizontal } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { deleteProduct } from "@/actions/products/delete-product";
import { Product } from "../columns";

interface CellActionProps {
  data: Product;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const router = useRouter();

  const onDelete = () => {
    deleteProduct({ id: data.id });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <span className="sr-only">Open menu</span>
        <MoreHorizontal />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => router.push(`/dashboard/products/${data.id}`)}
        >
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onDelete()}>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
