interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
  const { productId } = params;
  return <div>{productId}</div>;
};

export default ProductPage;
