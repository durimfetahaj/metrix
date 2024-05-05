import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { privateProcedure, publicProcedure, router } from "./trpc";
import { TRPCError } from "@trpc/server";
import { db } from "@/db";
import { InventoryItem } from "@/lib/validators/Inventory";
import { Product } from "@/lib/validators/Product";

export const appRouter = router({
  authCallback: publicProcedure.query(async () => {
    const { getUser, getPermission } = getKindeServerSession();
    const user = getUser();
    const role = getPermission("customer").isGranted ? "CUSTOMER" : "ADMIN";

    if (!user.id || !user.email) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }

    // check if the user is in the database
    const dbUser = await db.profile.findFirst({
      where: {
        userId: user.id,
      },
    });

    if (!dbUser) {
      // create user in db
      await db.profile.create({
        data: {
          userId: user.id,
          name: user.family_name,
          email: user.email,
          imageUrl: user.picture,
          role: role,
        },
      });
    }

    return { success: true };
  }),

  getProfile: publicProcedure.query(async () => {
    const { getUser } = getKindeServerSession();
    const user = getUser();

    if (!user.id || !user.email) throw new TRPCError({ code: "UNAUTHORIZED" });

    // check if the user is in the database
    const dbUser = await db.profile.findFirst({
      where: {
        userId: user.id,
      },
    });

    if (!dbUser) {
      await db.profile.create({
        data: {
          userId: user.id,
          name: user.family_name,
          email: user.email,
          imageUrl: user.picture,
        },
      });
    }

    return dbUser;
  }),

  getProducts: publicProcedure.query(async () => {
    return await db.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }),

  getThreeProducts: publicProcedure.query(async () => {
    return await db.product.findMany({
      take: 3,
      orderBy: {
        createdAt: "desc",
      },
    });
  }),

  getProductById: publicProcedure.input(Product).query(async ({ input }) => {
    try {
      const { id } = input;

      // Fetch the product by ID from the database, including variants
      const product = await db.product.findUnique({
        where: {
          id,
        },
        // include: {
        //   Attributes: true,
        // },
      });

      if (!product) {
        // If the product is not found, return a failure response
        return { success: false, error: "Product not found" };
      }

      // Return the fetched product
      return product;
    } catch (error) {
      // Handle errors and return a failure response
      console.error("Error fetching product by ID:", error);
      return { success: false, error: "Failed to fetch product by ID" };
    }
  }),

  createInventoryItem: privateProcedure
    .input(InventoryItem)
    .mutation(async ({ input }) => {
      const { name, category, price, description, stock, images } = input;

      const newProduct = await db.product.create({
        data: {
          name,
          category,
          price,
          stock,
          description,
          status: "PUBLISHED",
          images,
        },
      });

      return { success: true };
    }),

  // getCustomers: privateProcedure.query(async () => {
  //   return await db.customer.findMany();
  // }),
  // findConversation: privateProcedure
  //   .input(Conversation)
  //   .query(async ({ input }) => {
  //     const { firstParticipantId, secondParticipantId } = input;
  //     return await db.conversation.findFirst({
  //       where: {
  //         AND: [
  //           { firstParticipantId: firstParticipantId },
  //           { firstParticipantId: firstParticipantId },
  //         ],
  //       },
  //       include: {

  //       }
  //     });
  //   }),
});

export type AppRouter = typeof appRouter;
