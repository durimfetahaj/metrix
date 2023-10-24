import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/layout/navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex ">
        <Sidebar />
        <div className="w-full">
          <Navbar isDashboard />
          <div className="p-5">{children}</div>
        </div>
      </div>
    </section>
  );
}
