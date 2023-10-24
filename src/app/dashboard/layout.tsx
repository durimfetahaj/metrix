export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex gap-5 bg-red-500">
        <div className="w-[300px] bg-green-400 h-screen transition-all ease-in-out">
          Sidebar
        </div>
        <div>
          <div className="mb-5">header</div>
          {children}
        </div>
      </div>
    </section>
  );
}
