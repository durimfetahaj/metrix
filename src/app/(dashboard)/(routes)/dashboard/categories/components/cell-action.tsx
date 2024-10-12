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
import { Button } from "@/components/ui/button";

import { CategoryColumn } from "./columns";
import { deleteCategory } from "@/actions/categories/delete-category";

interface CellActionProps {
  data: CategoryColumn;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const router = useRouter();

  const onDelete = () => {
    deleteCategory({ id: data.id });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <span className="sr-only">Open menu</span>
        <MoreHorizontal />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => router.push(`/dashboard/categories/${data.id}`)}
        >
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onDelete()}>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
