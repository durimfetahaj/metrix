"use client";

import React from "react";
import { Category } from "@prisma/client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

type Props = { categories: Category[] };

export default function MobileCollections({ categories }: Props) {
  const router = useRouter();

  const handleOnSelect = (value: string) => {
    console.log({ value });

    if (value.toLowerCase() === "all") {
      console.log("inside if");
      router.push(`/search`);
    } else {
      router.push(`/search/${value.toLowerCase()}`);
    }
  };

  return (
    <div className=" md:hidden flex flex-col gap-1">
      <Select onValueChange={handleOnSelect}>
        <SelectTrigger>
          <SelectValue placeholder="All" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="all">All</SelectItem>

            {categories.map((category) => (
              <SelectItem key={category.id} value={category.name}>
                {category.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
