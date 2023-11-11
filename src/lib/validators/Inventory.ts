import { Category } from "@prisma/client";
import z from "zod";

export const InventoryItem = z.object({
  name: z.string({
    required_error: "Please enter a product name",
  }),
  category: z.nativeEnum(Category, {
    required_error: "Please Select a category",
  }), // Assuming Category is an enum
  sellingPrice: z.string({
    required_error: "Please enter a selling price",
  }),
  costPrice: z.string({
    required_error: "Please enter a cost price",
  }),
  stock: z.string({
    required_error: "Please enter a stock amount",
  }),
  description: z.string({
    required_error: "Please enter a description",
  }),
});
