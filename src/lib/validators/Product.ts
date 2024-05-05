import z from "zod";

export const Product = z.object({
  id: z.string(),
});
