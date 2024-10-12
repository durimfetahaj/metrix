import Link from "next/link";
import GridTileImage from "./grid/tile";
import { getThreeProducts } from "@/actions/products/get-three-products";

export async function Carousel() {
  const products = await getThreeProducts();

  if (!products?.length || products.length < 3) return null;

  const carouselProducts = [...products, ...products, ...products];

  return (
    <div className="w-full h-full overflow-x-auto pb-6 pt-1 mt-10">
      <ul className="flex animate-carousel gap-4">
        {carouselProducts.map((product, i) => (
          <li
            key={`${product.id}${i}`}
            className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
          >
            <Link
              // href={`/product/${product.id}`}
              href=""
              className="relative h-full w-full"
            >
              <GridTileImage
                alt={product.name}
                label={{
                  title: product.name,
                  amount: product.price,
                }}
                src={
                  product.images[0] ? product.images[0] : "/images/dummy.png"
                }
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
