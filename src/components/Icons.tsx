import { Ghost, LucideProps, Menu, ShoppingCart, User, X } from "lucide-react";

export const Icons = {
  user: User,
  cross: X,
  cart: ShoppingCart,
  ghost: Ghost,
  mobileMenu: (props: LucideProps) => <Menu {...props} className="h-5 w-5" />,
  search: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#e9e9f1"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-search"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  ),
};
