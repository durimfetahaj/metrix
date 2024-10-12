import { getProducts } from "@/actions/products/get-products";
import { trpc } from "@/app/_trpc/client";
import { Loader2 } from "lucide-react";
import React from "react";

interface ProductsProps {
  searchParams: {
    q: string;
  };
}

export const Products: React.FC<ProductsProps> = async ({ searchParams }) => {
  const { q } = searchParams;

  const products = await getProducts({ q });

  // const { data: products, isLoading } = trpc.getProducts.useQuery(
  //   { q: q || undefined } // Pass search term or undefined if it's empty
  // );

  if (q && products && !products.length)
    return <div>No products matched the search: "{q}"</div>;

  if (q)
    return (
      <div>
        Filtered Products:{" "}
        {products?.map((product) => (
          <div>{product.name}</div>
        ))}
      </div>
    );

  return (
    <div>
      All products:
      {products?.map((product) => (
        <div>{product.name}</div>
      ))}
    </div>
  );
};
