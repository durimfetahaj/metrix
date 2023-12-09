import Dashboard from "@/components/Dashboard";
import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Page = async () => {
  const { getUser, getPermission } = getKindeServerSession();
  const role = getPermission("customer").isGranted ? "customer" : "admin";
  const user = getUser();

  if (!user || !user.id) redirect("/auth-callback?origin=dashboard");

  const dbUser = await db.profile.findFirst({
    where: {
      userId: user.id,
    },
  });

  if (!dbUser) redirect("/auth-callback?origin=dashboard");

  redirect("/");
};

export default Page;
