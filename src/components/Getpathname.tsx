"use client";

import { usePathname } from "next/navigation";

const GetPathname = () => {
  const pathName = usePathname();

  return pathName.includes("/dashboard");
};

export default GetPathname;
