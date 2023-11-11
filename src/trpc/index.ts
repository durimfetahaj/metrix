import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { privateProcedure, publicProcedure, router } from "./trpc";
import { TRPCError } from "@trpc/server";
import { db } from "@/db";
import { z } from "zod";
import { CreateCustomer } from "@/lib/validators/Customer";
import { Conversation } from "@/lib/validators/Conversation";

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

  getThreeProducts: publicProcedure.query(async () => {
    return await db.product.findMany({
      take: 3,
      orderBy: {
        createdAt: "desc",
      },
    });
  }),

  // createCustomer: privateProcedure
  //   .input(CreateCustomer)
  //   .query(async ({ input }) => {
  //     const { name, email, address } = input;

  //     await db.customer.create({
  //       data: {
  //         name,
  //         email,
  //         address,
  //       },
  //     });

  //     return { success: true };
  //   }),

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
