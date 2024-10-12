"use client";

import { DataTable } from "@/components/DataTable";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Product } from "@prisma/client";
import Link from "next/link";
import { columns } from "../columns";
import { PlusIcon } from "lucide-react";

interface ProductsClientProps {
  data: Product[];
}

export const ProductsClient: React.FC<ProductsClientProps> = ({ data }) => {
  return (
    <div className="flex flex-col justify-between mb-10">
      <div className="flex justify-between">
        <Heading title="Inventory" />
        <Button asChild>
          <Link href="/dashboard/products/new">Add New</Link>
        </Button>
      </div>

      <DataTable
        columns={columns as any}
        data={data}
        filterPlaceholder="Search products..."
      />
    </div>
  );
};
