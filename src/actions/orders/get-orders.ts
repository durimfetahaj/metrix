"use server";

import { db } from "@/db";

export const getOrders = async () => {
  return await db.order.findMany({
    include: {
      orderItems: {
        include: {
          product: {
            select: {
              name: true,
            },
          },
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};
