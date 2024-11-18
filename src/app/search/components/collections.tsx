import React from "react";

import { getCategoriesWithProducts } from "@/actions/categories/get-categories-with-products";
import { Category } from "@prisma/client";
import { useRouter } from "next/router";
import MobileCollections from "./mobile-collections";

const Collections = async () => {
  const categories: Category[] = await getCategoriesWithProducts();

  return (
    <>
      {/* Mobile collections */}
      <MobileCollections categories={categories} />

      <div className="hidden md:flex flex-col gap-1">
        <h3 className=" text-xs text-neutral-500 md:block dark:text-neutral-400">
          Collections
        </h3>
        <ul className="md:block">
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
