"use client";

import { DataTable } from "@/components/DataTable";
import { Heading } from "@/components/ui/heading";
import { Order } from "@prisma/client";
import { columns } from "../columns";

interface OrdersClientProps {
  data: Order[];
}

export const OrdersClient: React.FC<OrdersClientProps> = ({ data }) => {
  return (
    <div className="flex flex-col justify-between mb-10">
      <div className="flex justify-between">
        <Heading title="Orders" />
      </div>

      <DataTable
        columns={columns as any}
        data={data}
        filterPlaceholder="Search orders..."
      />
    </div>
  );
};
