"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CellAction } from "./components/cell-action";

export type Product = {
  id: string;
  name: string;
  images: string[];
  stock: string;
  Category: { name: string };
};

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: "Product Name",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-5">
          <div className="h-14 w-14 relative overflow-hidden ">
            <Image
              className="border p-2 rounded-lg"
              alt={row.original.name}
              src={row.original.images[0]}
              fill
            />
          </div>
          <p>{row.original.name}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "Category.name",
    header: "Category",
    // cell: ({ row }) => row.original.Category.name,
  },
  {
    accessorKey: "sellingPrice",
    header: "Price",
    // cell: ({ row }) =>
    //   new Intl.NumberFormat("de-DE", {
    //     style: "currency",
    //     currency: "EUR",
    //   }).format(parseFloat(row.original.price.replace(/,/g, ""))),
  },
  {
    accessorKey: "stock",
    header: "Stock",
    cell: ({ row }) =>
      new Intl.NumberFormat().format(Number(row.original.stock)),
  },
  {
    accessorKey: "totalValue",
    header: "Total Value",
    // cell: ({ row }) =>
    //   new Intl.NumberFormat("de-DE", {
    //     style: "currency",
    //     currency: "EUR",
    //   }).format(
    //     Number(row.original.stock) *
    //       parseFloat(row.original.price.replace(/,/g, ""))
    //   ),
  },
  {
    accessorKey: "status",
    header: "Status",
    // cell: ({ row }) => {
    //   return (
    //     <Badge
    //       variant={
    //         row.original.status.toLocaleLowerCase() === "UNPUBLISHED"
    //           ? "outline"
    //           : "default"
    //       }
    //     >
    //       {row.original.status.charAt(0).toUpperCase() +
    //         row.original.status.slice(1).toLowerCase()}
    //     </Badge>
    //   );
    // },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
