import React from "react";

import { Products } from "@/components/Products";

interface SearchPageProps {
  searchParams: {
    q: string;
  };
}

const SearchPage: React.FC<SearchPageProps> = ({ searchParams }) => {
  return (
    <div>
      <Products searchParams={searchParams} />
    </div>
  );
};

export default SearchPage;
