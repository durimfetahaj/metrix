import React from "react";
import { Carousel } from "@/components/Carousel";
import ThreeItemGrid from "@/components/grid/three-items";
import Footer from "@/components/layout/footer";
import MainNavbar from "@/components/main-navbar";

export default function Home() {
  return (
    <>
      <MainNavbar />
      <ThreeItemGrid />
      <Carousel />
      <Footer />
    </>
  );
}
