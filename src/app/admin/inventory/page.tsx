import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = () => {
  return (
    <div className="container h-full px-5">
      <div className="flex justify-between">
        <p>Inventory</p>
        <Button asChild>
          <Link href="/admin/inventory/new">Add Product</Link>
        </Button>
      </div>
    </div>
  );
};

export default Page;
