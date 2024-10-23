"use server";

import { db } from "@/db";
import { revalidatePath } from "next/cache";

interface UpdateCategoryProps {
  id: string;
  name: string;
}
export const updateCategory = async ({ id, name }: UpdateCategoryProps) => {
  try {
    // Update the category by ID in the database
    const category = await db.category.update({
      where: { id },
      data: { name },
    });

    if (!category) {
      // If the category is not found, return a failure response
      return { success: false, error: "Category not found" };
    }

    revalidatePath("/dashboard/categories");

    // Return a success response with the updated category
    return { success: true, category };
  } catch (error) {
    // Handle errors and return a failure response
    console.error("Error updating category by ID:", error);
    return { success: false, error: "Failed to update category by ID" };
  }
};
