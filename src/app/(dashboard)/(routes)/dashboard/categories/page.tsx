import { getCategories } from "@/actions/categories/get-categories";
import { CategoriesClient } from "./components/client";

const CategoriesPage = async () => {
  const categories = await getCategories();
  return (
    <div className="container h-full px-5 space-x-10">
      <CategoriesClient data={categories} />
    </div>
  );
};

export default CategoriesPage;
