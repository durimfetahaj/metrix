import z from "zod";

export const InventoryItem = z.object({
  name: z.string({
    required_error: "Please enter a product name",
  }),
  categoryId: z.string({
    required_error: "Please Select a category",
  }),
  price: z.string({
    required_error: "Please enter a selling price",
  }),
  stock: z.string({
    required_error: "Please enter a stock amount",
  }),
  description: z.string({
    required_error: "Please enter a description",
  }),
  images: z.array(z.string()),
});
