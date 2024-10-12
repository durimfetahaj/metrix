import { db } from "@/db";

export const getThreeProducts = async () => {
  return await db.product.findMany({
    take: 3,
    orderBy: {
      createdAt: "desc",
    },
  });
};
