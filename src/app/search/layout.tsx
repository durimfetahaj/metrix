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

      <div className="container mx-auto min-h-screen flex gap-10">
        <Collections />
        {children}
      </div>
      <Footer />
    </div>
  );
}
