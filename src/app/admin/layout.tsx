import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/layout/navbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex">
        {/* <Sidebar /> */}
        <div className="w-full">
          <Navbar role="admin" isDashboard />
          <div className="py-10 px-5 h-[calc(100%-80px)]">{children}</div>
        </div>
      </div>
    </section>
  );
}
