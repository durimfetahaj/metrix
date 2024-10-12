"use server";

import { db } from "@/db";

export const getCategories = async () => {
  const data = await db.category.findMany();
  return data;
};
