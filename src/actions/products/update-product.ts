"use server";

import { db } from "@/db";

interface UpdateProductProps {
  id: string;
  description: string;
  name: string;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
  price: string;
  stock: string;
  userId: string | null;
  categoryId: string | null;
}

export const updateProduct = async (props: UpdateProductProps) => {
  try {
    // Update the product by ID in the database
    const product = await db.product.update({
      where: { id: props.id },
      data: props,
    });

    if (!product) {
      // If the product is not found, return a failure response
      return { success: false, error: "Product not found" };
    }

    // Return a success response with the updated product
    return { success: true, product };
  } catch (error) {
    // Handle errors and return a failure response
    console.error("Error updating product by ID:", error);
    return { success: false, error: "Failed to update product by ID" };
  }
};
