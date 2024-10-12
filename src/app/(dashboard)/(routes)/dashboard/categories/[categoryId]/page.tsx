import { getCategory } from "@/actions/categories/get-category";

import CategoryForm from "./components/category-form";

interface CategoryPageProps {
  params: { categoryId: string };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({ params }) => {
  const category = await getCategory({ id: params.categoryId });

  return (
    <div className="container">
      <CategoryForm initialData={category} />
    </div>
  );
};

export default CategoryPage;
