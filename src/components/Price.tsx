import { CurrencyFormatter } from "@/lib/utils";
import { Badge } from "./ui/badge";

const Price = ({ amount }: { amount: string }) => {
  return <Badge className="p-2">{CurrencyFormatter({ amount })}</Badge>;
};

export default Price;
