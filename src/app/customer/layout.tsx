import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/layout/navbar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { getPermission } = getKindeServerSession();
  const role = getPermission("customer").isGranted ? "customer" : "admin";

  if (role !== "customer") redirect("/admin");

  return (
    <section>
      <div className="flex">
        {/* <Sidebar /> */}
        <div className="w-full">
          <Navbar role="customer" isDashboard />
          <div className="py-10 px-5 h-[calc(100%-80px)]">{children}</div>
        </div>
      </div>
    </section>
  );
}
