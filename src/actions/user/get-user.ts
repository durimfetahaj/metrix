import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const getUser = async () => {
  const session = getKindeServerSession();
  const user = session.getUser();

  if (!user.id || !user.email) {
    // Custom error handling with a string message
    const error = new Error("User is not authenticated");
    error.message = "UNAUTHORIZED";
    throw error;
  }

  // Check if the user exists in the database
  let dbUser = await db.user.findFirst({
    where: {
      userId: user.id,
    },
  });

  // If the user doesn't exist, create a new one
  if (!dbUser) {
    dbUser = await db.user.create({
      data: {
        userId: user.id,
        name: user.family_name,
        email: user.email,
        imageUrl: user.picture,
      },
    });
  }

  return dbUser;
};
