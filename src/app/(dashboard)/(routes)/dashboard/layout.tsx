import DashboardNavbar from "@/components/dashboard/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div>
        <DashboardNavbar />
        {children}
      </div>
    </section>
  );
}
