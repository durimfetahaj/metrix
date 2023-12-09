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
import { Product } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => {
      return (
        row.original.category.charAt(0).toUpperCase() +
        row.original.category.slice(1).toLowerCase()
      );
    },
  },
  {
    accessorKey: "sellingPrice",
    header: "Price",
    cell: ({ row }) =>
      new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(Number(row.original.sellingPrice)),
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
    cell: ({ row }) =>
      new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(Number(row.original.stock) * Number(row.original.sellingPrice)),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <Badge
          variant={
            row.original.status.toLocaleLowerCase() === "UNPUBLISHED"
              ? "outline"
              : "default"
          }
        >
          {row.original.status.charAt(0).toUpperCase() +
            row.original.status.slice(1).toLowerCase()}
        </Badge>
      );
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const product = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(product.id)}
            >
              Copy product ID
            </DropdownMenuItem>
            <Link href={`/inventory/product/${product.id}`}>
              <DropdownMenuItem>View Product</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
