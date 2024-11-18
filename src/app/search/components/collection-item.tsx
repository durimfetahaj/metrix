import GridTileImage from "@/components/grid/tile";
import Grid from "@/components/ui/grid";
import { Product } from "@prisma/client";
import Link from "next/link";
import React from "react";

type Props = {
  item: Product;
};

export const CollectionItem = ({ item }: Props) => {
  return (
    <Grid.Item key={item.id} className="animate-fadeIn">
      <Link
        className="relative inline-block h-full w-full"
        href={`/product/${item.id}`}
        prefetch={true}
      >
        <GridTileImage
          alt={item.name}
          src={item.images[0]}
          width={100}
          height={100}
          sizes="md:(min-width: 768px) 33vw, 100vw"
          label={{ title: item.name, amount: item.price }}
        />
      </Link>
    </Grid.Item>
  );
};
