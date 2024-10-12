"use server";

import { db } from "@/db";

interface GetProductByIdProps {
  id: string | "new";
}

export const getProductById = async ({ id }: GetProductByIdProps) => {
  try {
    const product = await db.product.findUnique({
      where: {
        id,
      },
    });

    if (!product) {
      throw new Error("Product not found");
    }

    return product;
  } catch (error) {
    console.error(error);
  }
};
