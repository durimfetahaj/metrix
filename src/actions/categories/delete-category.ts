"use server";

import { db } from "@/db";
import { revalidatePath } from "next/cache";

interface DeleteCategoryProps {
  id: string;
}

export const deleteCategory = async ({ id }: DeleteCategoryProps) => {
  try {
    const category = await db.category.delete({
      where: { id },
    });

    if (!category) {
      return { success: false, error: "Category not found" };
    }

    revalidatePath("/dashboard/categories");

    // Return a success response
    return { success: true, message: "Category deleted successfully" };
  } catch (error) {
    console.error("Error deleting category by ID:", error);
    return { success: false, error: "Failed to delete category" };
  }
};
