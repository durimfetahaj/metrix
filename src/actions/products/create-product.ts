"use server";

import { db } from "@/db";
import { Product } from "@/types";
import { revalidatePath } from "next/cache";

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

    revalidatePath("/dashboard/products");

    return { data: newProduct, success: true };
  } catch (error) {
    console.error("Error creating product:", error);

    return { success: false, error: "Failed to create product" };
  }
};
