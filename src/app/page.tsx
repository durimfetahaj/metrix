import { Carousel } from "@/components/Carousel";
import ThreeItemGrid from "@/components/grid/three-items";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <ThreeItemGrid />
      <Carousel />
      <Footer />
    </>
  );
}
