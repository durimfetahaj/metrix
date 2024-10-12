import Price from "@/components/Price";
import { Separator } from "@/components/ui/separator";
import { Product } from "@prisma/client";
import { AddToCartButton } from "@/components/ui/add-to-cart-button";
import { ProductCarousel } from "./product-carousel";

interface ProductCardProps {
  data: Product | null | undefined;
}

export const ProductCard = ({ data }: ProductCardProps) => {
  if (!data) return;

  const { name, price, description, images } = data;

  console.log({ images });

  return (
    <div className="mx-auto max-w-screen-2xl bg-black border flex rounded-xl p-12">
      <div className="w-2/3">
        <ProductCarousel data={images} />
      </div>
      <div className="ml-auto space-y-6">
        <h2 className="text-4xl font-semibold">{name}</h2>
        <Price amount={price} />
        <Separator />
        <div className="overflow-hidden max-w-lg break-words line-clamp-5">
          {description}
        </div>
        <AddToCartButton />
      </div>
    </div>
  );
};
