import { getProducts } from "@/actions/products/get-products";

import { ProductsClient } from "./components/client";

const ProductsPage = async () => {
  const products = await getProducts();

  return (
    <div className="container h-full px-5">
      <ProductsClient data={products} />
    </div>
  );
};

export default ProductsPage;
