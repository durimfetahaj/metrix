import MainNavbar from "@/components/main-navbar";
import { ProductCard } from "./components/product-card";
import { getProductById } from "@/actions/products/get-product-by-id";
import Footer from "@/components/layout/footer";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const { productId } = params;

  const product = await getProductById({ id: productId });

  return <ProductCard data={product} />;
};

export default ProductPage;
