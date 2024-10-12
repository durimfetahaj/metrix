"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { CellAction } from "./components/cell-action";

export type Product = {
  id: string;
  name: string;
  images: string[];
  price: string;
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
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) =>
      new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(parseFloat(row.original.price.replace(/,/g, ""))),
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
      }).format(
        Number(row.original.stock) *
          parseFloat(row.original.price.replace(/,/g, ""))
      ),
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
