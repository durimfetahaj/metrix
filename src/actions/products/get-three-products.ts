"use server";

import { db } from "@/db";

export const getThreeProducts = async () => {
  try {
    const products = await db.product.findMany({
      take: 3,
      orderBy: {
        createdAt: "desc",
      },
    });
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products."); // Rethrow the error with a custom message
  }
};
