type Props = {
  params: {
    productId: string;
  };
};

const page = ({ params }: Props) => {
  return <div>Product id: {params.productId}</div>;
};

export default page;
