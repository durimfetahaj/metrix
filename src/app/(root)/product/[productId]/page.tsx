import MainNavbar from "@/components/main-navbar";
import { ProductCard } from "./components/product-card";
import { getProductById } from "@/actions/products/get-product-by-id";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const { productId } = params;

  const product = await getProductById({ id: productId });

  return (
    <div>
      <MainNavbar />
      <div className="container">
        <ProductCard data={product} />
      </div>
    </div>
  );
};

export default ProductPage;
