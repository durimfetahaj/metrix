import Footer from "@/components/layout/footer";
import MainNavbar from "@/components/main-navbar";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex flex-col justify-between ">
      <MainNavbar />

      <div className="container mx-auto px-4 md:min-h-screen">{children}</div>
      <Footer />
    </div>
  );
}
