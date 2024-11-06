"use client";

import { CurrencyFormatter } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";

export type OrderItem = {
  id: string;
  quantity: number;
  price: string;
  product: {
    name: string;
  };
};

export type Order = {
  id: string;
  address: string;
  isPaid: boolean;
  phone: string;
  orderItems: OrderItem[];
};

type OrderItemCardProps = {
  item: OrderItem;
};

const OrderItemCard: React.FC<OrderItemCardProps> = ({ item }) => {
  return (
    <div className="flex gap-8 space-x-2 text-sm">
      <div className="truncate">
        <h3 className="font-medium">{item.product.name}</h3>
        <span className="font-medium text-xs text-gray-400">
          Qty: {item.quantity}
        </span>
      </div>

      <div>
        <span className="font-medium">
          <CurrencyFormatter amount={String(item.price)} />
        </span>
      </div>
    </div>
  );
};

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "orderItems",
    header: "Products",
    cell: ({ row }) => (
      <div className="space-y-4">
        {row.original.orderItems.map((item) => (
          <OrderItemCard key={item.id} item={item} />
        ))}
      </div>
    ),
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "totalPrice",
    header: "Total Price",
    cell: ({ row }) => {
      const totalPrice = row.original.orderItems.reduce(
        (sum, item) => sum + Number(item.price) * item.quantity,
        0
      );
      return <CurrencyFormatter amount={String(totalPrice)} />;
    },
  },
  {
    accessorKey: "isPaid",
    header: "Is Paid",
  },
];
