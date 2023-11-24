"use client";

import { trpc } from "@/app/_trpc/client";
import { TableDataSkeleton } from "@/components/Skeletons";
import { DataTable } from "@/components/DataTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { columns } from "./columns";

const Page = () => {
  const { data: products, isLoading } = trpc.getProducts.useQuery();

  return (
    <div className="container h-full px-5">
      <div className="flex justify-between mb-10">
        <p>Inventory</p>
        <Button asChild>
          <Link href="/admin/inventory/new">Add Product</Link>
        </Button>
      </div>

      {isLoading ? (
        <TableDataSkeleton />
      ) : (
        <DataTable
          columns={columns}
          data={products as any}
          filterPlaceholder="Search products..."
        />
      )}
    </div>
  );
};

export default Page;
