import { getCategories } from "@/actions/get-categories";
import ProductForm from "./components/product-form";
import { getProductById } from "@/actions/products/get-product-by-id";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProductById({ id: params.productId });
  const categories = await getCategories();

  return (
    <div className="container h-full px-5">
      <ProductForm initialData={product} categories={categories} />
    </div>
  );
};

export default ProductPage;
