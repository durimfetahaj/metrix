import Footer from "@/components/layout/footer";
import MainNavbar from "@/components/main-navbar";
import Collections from "./components/collections";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex flex-col justify-between ">
      <MainNavbar />

      <div className="container mx-auto flex flex-col gap-8 px-4 md:flex-row md:gap-10 md:min-h-screen ">
        <Collections />
        {children}
      </div>
      <Footer />
    </div>
  );
}
