"use server";

import { db } from "@/db";
import { revalidatePath } from "next/cache";

interface UpdateProductProps {
  id: string;
  description: string;
  name: string;
  images: string[];
  price: string;
  stock: string;
  categoryId: string | null;
}

export const updateProduct = async (props: UpdateProductProps) => {
  try {
    const product = await db.product.update({
      where: { id: props.id },
      data: props,
    });

    if (!product) {
      return { success: false, error: "Product not found" };
    }

    revalidatePath("/dashboard/products");

    return { success: true, product };
  } catch (error) {
    console.error("Error updating product by ID:", error);
    return { success: false, error: "Failed to update product by ID" };
  }
};
