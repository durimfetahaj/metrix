"use client";

import { format } from "date-fns";
import Link from "next/link";

import { DataTable } from "@/components/DataTable";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Category } from "@prisma/client";
import { CategoryColumn, columns } from "./columns";
import { Separator } from "@/components/ui/separator";

interface CategoriesClientProps {
  data: Category[];
}

export const CategoriesClient: React.FC<CategoriesClientProps> = ({ data }) => {
  const formattedCategories: CategoryColumn[] = data?.map((item) => ({
    id: item.id,
    name: item.name,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex flex-col justify-between mb-10 space-y-5">
      <div className="flex justify-between">
        <Heading title="Categories" />
        <Button asChild>
          <Link href="/dashboard/categories/new">Add New</Link>
        </Button>
      </div>

      <DataTable
        columns={columns}
        data={formattedCategories as any}
        filterPlaceholder="Search categories..."
      />
    </div>
  );
};
