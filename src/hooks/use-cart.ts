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
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      isOpen: false,
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      items: [],
      addItem: (data: Product) => {
        const productExists = get().items.find((item) => item.id === data.id);

        if (productExists) {
          const updatedProducts = [
            ...get().items.filter((item) => item.id !== data.id),
            { ...productExists, quantity: productExists.quantity + 1 },
          ];

          set({ items: updatedProducts });
        } else {
          set({ items: [...get().items, { ...data, quantity: 1 }] });
        }
      },
      removeItem: (id: string) => {
        const productExists = get().items.find((item) => item.id === id);

        if (productExists && productExists.quantity > 1) {
          const updatedProducts = [
            ...get().items.filter((item) => item.id !== id),
            { ...productExists, quantity: productExists.quantity - 1 },
          ];

          set({ items: updatedProducts });
        } else {
          set({ items: [...get().items.filter((item) => item.id !== id)] });
        }
      },
      removeAll: (id: string) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
      },
    }),
    { name: "cart-storage", storage: createJSONStorage(() => localStorage) }
  )
);

export default useCart;
