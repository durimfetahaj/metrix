"use server";

import { db } from "@/db";
import { Product } from "@/types";

export const createProduct = async (data: Product) => {
  try {
    const { name, price, stock, description, images, categoryId } = data;

    const newProduct = await db.product.create({
      data: {
        name,
        price,
        stock,
        description,
        images,
        Category: {
          connect: {
            id: categoryId,
          },
        },
      },
    });

    return { data: newProduct, success: true };
  } catch (error) {
    console.error("Error creating product:", error);

    return { success: false, error: "Failed to create product" };
  }
};
