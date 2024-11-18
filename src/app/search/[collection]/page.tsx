import { getCategoryByName } from "@/actions/categories/get-category-by-name";
import { getProductsByCollection } from "@/actions/products/get-products-by-collection";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { CollectionItem } from "../components/collection-item";
import Grid from "@/components/ui/grid";

export async function generateMetadata(props: {
  params: Promise<{ collection: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const collection = await getCategoryByName({ collection: params.collection });

  if (!collection) return notFound();

  return {
    title: collection.name,
    description: `${collection.name} products`,
  };
}

export default async function CategoryPage(props: {
  params: Promise<{ collection: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await props.params;

  const products = await getProductsByCollection({
    collection: params.collection,
  });

  return (
    <section>
      {products.length === 0 ? (
        <p className="py-3 text-lg">{`No products found in this collection`}</p>
      ) : (
        <Grid className="grid-cols-1 sm:grid-cols-3 lg:grid-cols-3">
          {products.map((product) => (
            <CollectionItem key={product.id} item={product} />
          ))}
        </Grid>
      )}
    </section>
  );
}
