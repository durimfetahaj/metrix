import { getCategoriesWithProducts } from "@/actions/categories/get-categories-with-products";
import { Category } from "@prisma/client";
import React from "react";

const Collections = async () => {
  const categories: Category[] = await getCategoriesWithProducts();
  return (
    <>
      <div className="flex flex-col gap-1">
        <h3 className="hidden text-xs text-neutral-500 md:block dark:text-neutral-400">
          Collections
        </h3>
        <ul className="hidden md:block">
          <li>
            <a href={`/search`}>All</a>
          </li>
          {categories.map((category) => (
            <li key={category.id}>
              <a href={`/search/${category.name.toLowerCase()}`}>
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Collections;
