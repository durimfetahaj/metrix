import { z } from "zod";

export const categorySchema = z.object({
  name: z
    .string({
      required_error: "Please enter a category name",
    })
    .min(1, "Category name cannot be empty"),
});
