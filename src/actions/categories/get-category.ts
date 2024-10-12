import { db } from "@/db";

interface GetCategoryProps {
  id: string;
}

export const getCategory = async ({ id }: GetCategoryProps) => {
  const category = await db.category.findUnique({
    where: {
      id,
    },
  });

  if (!category) {
    return null;
  }

  return category;
};
