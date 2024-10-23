import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

interface DashboardPageProps {}

const DashboardPage: React.FC<DashboardPageProps> = async ({}) => {
  const { getUser, getPermission } = getKindeServerSession();
  const role = getPermission("customer").isGranted ? "customer" : "admin";
  const user = getUser();

  if (!user || !user.id) redirect("/auth-callback?origin=dashboard");

  const dbUser = await db.user.findFirst({
    where: {
      userId: user.id,
    },
  });

  if (!dbUser) redirect("/auth-callback?origin=dashboard");

  return <div className="text-center">Dashboard Page</div>;
};

export default DashboardPage;
