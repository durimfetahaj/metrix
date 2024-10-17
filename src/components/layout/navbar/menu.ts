export interface MenuItem {
  label: string;
  url: string;
}

export const mainNavLinks = [
  { label: "All", url: "/search" },
  { label: "Phones", url: "/search/phones" },
  { label: "Laptops", url: "/search/laptops" },
];

export const dashboardNavLinks = [
  {
    url: "/",
    label: "Home",
  },
  {
    url: "/dashboard/orders",
    label: "Orders",
  },
  {
    url: "/dashboard/customers",
    label: "Customers",
  },
  {
    url: "/dashboard/inventory",
    label: "Inventory",
  },
  {
    url: "/dashboard/conversations",
    label: "Conversations",
  },
  {
    url: "/dashboard/settings",
    label: "Settings",
  },
];
