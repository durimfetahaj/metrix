import React from "react";
import Grid from "@/components/ui/grid";

import { getProducts } from "@/actions/products/get-products";
import { CollectionItem } from "@/app/search/components/collection-item";

interface ProductsProps {
  searchParams: {
    q: string;
  };
}

export const Products: React.FC<ProductsProps> = async ({ searchParams }) => {
  const { q } = searchParams;

  const products = await getProducts({ q });

  if (q && products && !products.length)
    return <div>No products matched the search: {q}</div>;

  if (q)
    return (
      <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <CollectionItem key={product.id} item={product} />
        ))}
      </Grid>
    );

  return (
    <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <CollectionItem key={product.id} item={product} />
      ))}
    </Grid>
  );
};
