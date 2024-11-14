"use server";

import { db } from "@/db";

export const getCategoriesWithProducts = async () => {
  const data = await db.category.findMany({
    where: {
      products: {
        some: {},
      },
    },
  });
  return data;
};
