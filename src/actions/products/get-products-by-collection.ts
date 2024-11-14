"use server";

import { db } from "@/db";

interface getProductsProps {
  collection: string;
}

export const getProductsByCollection = async ({
  collection,
}: getProductsProps) => {
  if (!collection) return [];

  return await db.product.findMany({
    where: {
      Category: {
        name: {
          contains: collection,
          mode: "insensitive",
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      Category: {
        select: {
          name: true,
        },
      },
    },
  });
};
