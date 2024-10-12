"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FC, useEffect, useState } from "react";

interface ProductCarouselProps {
  data: string[];
}

export const ProductCarousel: FC<ProductCarouselProps> = ({ data }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mx-20 max-w-md">
      <Carousel setApi={setApi} className="w-full max-w-md">
        <CarouselContent>
          {data.map((image, index) => (
            <CarouselItem key={index}>
              <img
                src={image}
                alt={`Product ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Image {current} of {count}
      </div>
    </div>
  );
};
