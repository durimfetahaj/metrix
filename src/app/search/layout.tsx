import MainNavbar from "@/components/main-navbar";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <MainNavbar />

      {children}
    </section>
  );
}
