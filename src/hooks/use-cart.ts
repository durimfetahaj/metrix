import { Product } from "@prisma/client";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface ProductWithQuantity extends Product {
  quantity: number;
}

interface CartStore {
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  items: ProductWithQuantity[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: (id: string) => void;
  totalAmount: number;
}

const calculateTotalAmount = (items: ProductWithQuantity[]) =>
  items.reduce((total, item) => total + Number(item.price) * item.quantity, 0);

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      isOpen: false,
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      items: [],
      totalAmount: 0,
      addItem: (data: Product) => {
        const productExists = get().items.find((item) => item.id === data.id);

        if (productExists) {
          const updatedItems = [
            ...get().items.filter((item) => item.id !== data.id),
            { ...productExists, quantity: productExists.quantity + 1 },
          ];

          set({
            items: updatedItems,
            totalAmount: calculateTotalAmount(updatedItems),
          });
        } else {
          const updatedItems = [...get().items, { ...data, quantity: 1 }];
          set({
            items: updatedItems,
            totalAmount: calculateTotalAmount(updatedItems),
          });
        }
      },
      removeItem: (id: string) => {
        const productExists = get().items.find((item) => item.id === id);

        if (productExists && productExists.quantity > 1) {
          const updatedItems = [
            ...get().items.filter((item) => item.id !== id),
            { ...productExists, quantity: productExists.quantity - 1 },
          ];

          set({
            items: updatedItems,
            totalAmount: calculateTotalAmount(updatedItems),
          });
        } else {
          const filteredItems = [
            ...get().items.filter((item) => item.id !== id),
          ];
          set({
            items: filteredItems,
            totalAmount: calculateTotalAmount(filteredItems),
          });
        }
      },
      removeAll: (id: string) => {
        const filteredItems = [...get().items.filter((item) => item.id !== id)];
        set({
          items: filteredItems,
          totalAmount: calculateTotalAmount(filteredItems),
        });
      },
    }),
    { name: "cart-storage", storage: createJSONStorage(() => localStorage) }
  )
);

export default useCart;
