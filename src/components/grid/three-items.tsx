import Link from "next/link";
import { Icons } from "../Icons";
import { Skeleton } from "../ui/skeleton";
import GridTileImage from "./tile";
import { getThreeProducts } from "@/actions/products/get-three-products";

const ThreeItemGridItem = ({
  item,
  size,
  priority,
}: {
  item: any;
  size: "full" | "half";
  priority?: boolean;
}) => {
  return (
    <div
      className={
        size === "full"
          ? "md:col-span-4 md:row-span-2"
          : "md:col-span-2 md:row-span-1"
      }
    >
      <Link
        className="relative block aspect-square h-full w-full"
        href={`/product/${item?.id}`}
      >
        <GridTileImage
          src={item?.images[0] ? item.images[0] : "/images/dummy.png"}
          fill
          sizes={
            size === "full"
              ? "(min-width: 768px) 66vw, 100vw"
              : "(min-width: 768px) 33vw, 100vw"
          }
          priority={priority}
          alt={item?.name}
          label={{
            position: size === "full" ? "center" : "bottom",
            title: item?.name as string,
            amount: item?.price,
          }}
        />
      </Link>
    </div>
  );
};

const ThreeItemGrid = async () => {
  const products = await getThreeProducts();

  return products && products?.length !== 0 && products?.length >= 3 ? (
    <section className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2 w-full ">
      <ThreeItemGridItem size="full" item={products[0]} priority={true} />
      <ThreeItemGridItem size="half" item={products[1]} priority={true} />
      <ThreeItemGridItem size="half" item={products[2]} />
    </section>
  ) : (
    <div className="mt-16 flex flex-col items-center gap-2">
      <Icons.ghost className="h-8 w-8 text-zinc-800" />
      <h3 className="font-semibold text-xl">Pretty empty around here</h3>
      <p>Inventory can only be updated inside dashboard</p>
    </div>
  );
};

export default ThreeItemGrid;
