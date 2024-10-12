"use server";

import { db } from "@/db";
import { revalidatePath } from "next/cache";

interface DeleteProductProps {
  id: string;
}

export const deleteProduct = async ({ id }: DeleteProductProps) => {
  try {
    const product = await db.product.delete({
      where: { id },
    });

    if (!product) {
      return { success: false, error: "Product not found" };
    }

    revalidatePath("/dashboard/products");

    // Return a success response
    return { success: true, message: "Product deleted successfully" };
  } catch (error) {
    console.error("Error deleting product by ID:", error);
    return { success: false, error: "Failed to delete product" };
  }
};
