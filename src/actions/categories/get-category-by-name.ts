"use server";

import { db } from "@/db";

interface GetCategoryByNameProps {
  collection: string;
}

export const getCategoryByName = async ({
  collection,
}: GetCategoryByNameProps) => {
  const category = await db.category.findFirst({
    where: {
      name: {
        contains: collection,
        mode: "insensitive",
      },
    },
  });

  if (!category) {
    return null;
  }

  return category;
};
