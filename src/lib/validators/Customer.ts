import z from "zod";

export const CreateCustomer = z.object({
  name: z.string(),
  email: z.string(),
  address: z.string(),
});
