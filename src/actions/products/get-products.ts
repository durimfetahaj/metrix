import { db } from "@/db";

interface getProductsProps {
  q?: string | undefined;
}

export const getProducts = async ({ q }: getProductsProps = {}) => {
  return await db.product.findMany({
    where: q
      ? {
          name: {
            contains: q, // Filter products by the query
            mode: "insensitive", // Case-insensitive search
          },
        }
      : {}, // If `q` is not provided, fetch all products
    orderBy: {
      createdAt: "desc", // Sort by creation date
    },
    include: {
      Category: {
        select: {
          name: true,
        },
      },
    },
  });
};
