"use server";

import { db } from "@/db";
import { revalidatePath } from "next/cache";

interface CreateCategoryProps {
  name: string;
}

export const createCategory = async ({ name }: CreateCategoryProps) => {
  try {
    const existingCategory = await db.category.findUnique({
      where: { name },
    });

    // If the category already exists, return an error
    if (existingCategory) {
      throw new Error("Category already exists");
    }

    // Create the new category
    const newCategory = await db.category.create({
      data: {
        name,
      },
    });

    revalidatePath("/dashboard/categories");

    return { data: newCategory, success: true };
  } catch (error) {
    console.log({ error });
  }
};
