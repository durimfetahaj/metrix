import { Product } from "@prisma/client";

import useCart from "@/hooks/use-cart";
import { CurrencyFormatter } from "@/lib/utils";
import { Icons } from "@/components/Icons";

interface ProductWithQuantity extends Product {
  quantity: number;
}

interface CartItemProps {
  data: ProductWithQuantity;
}

export const CartItem = ({ data }: CartItemProps) => {
  const { removeItem, removeAll, addItem } = useCart();
  const totalAmount = data.quantity;
  const totalPrice = totalAmount * Number(data.price);

  return (
    <li className="flex w-full flex-col border-b border-neutral-300 dark:border-neutral-700 overflow-hidden">
      <div className="flex gap-5 w-full justify-between px-1 py-4">
        <div className="absolute z-10 -ml-1 -mt-2">
          <button onClick={() => removeAll(data?.id)}>
            <Icons.circleX />
          </button>
        </div>
        <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-neutral-300 bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800">
          <img
            src={data?.images[0]}
            className="object-contain w-full h-full"
            alt="Image"
          />
        </div>
        <div className="flex flex-col gap-5 justify-between">
          <div className="flex gap-5 w-full justify-between">
            <p className="line-clamp-1">{data.name}</p>
            <p className="flex-shrink-0 text-right">
              <CurrencyFormatter amount={String(totalPrice)} />
            </p>
          </div>
          <div className="ml-auto flex h-9 items-center rounded-full border border-neutral-200 dark:border-neutral-700">
            <button
              className="ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full p-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80 ml-auto"
              onClick={() => removeItem(data.id)}
              disabled={totalAmount === 0}
            >
              <Icons.minus className="h-4 w-4 dark:text-neutral-500" />
            </button>
            <p className="w-6 text-center">
              <span className="w-full text-sm">{totalAmount}</span>
            </p>
            <button className="ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full p-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80 ml-auto">
              <Icons.plus
                className="h-4 w-4 dark:text-neutral-500"
                onClick={() => addItem(data)}
              />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};
