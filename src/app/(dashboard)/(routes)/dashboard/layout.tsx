import DashboardNavbar from "@/components/dashboard/Navbar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated } = getKindeServerSession();

  if (!isAuthenticated()) redirect("/");

  return (
    <section>
      <div>
        <DashboardNavbar />
        {children}
      </div>
    </section>
  );
}
