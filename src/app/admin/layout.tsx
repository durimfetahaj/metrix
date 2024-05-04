import Navbar from "@/components/layout/navbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* <Sidebar /> */}
      {/* <div className="w-full"> */}
      <Navbar role="admin" isDashboard />
      <div className="py-10 px-5 text-center bg-background">{children}</div>
      {/* </div> */}
    </section>
  );
}
