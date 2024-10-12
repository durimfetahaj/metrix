export interface MenuItem {
  label: string;
  url: string;
}

const menu = [
  { label: "All", url: "/search" },
  { label: "Phones", url: "/phones" },
  { label: "Pc Builds", url: "/pc-builds" },
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

export default menu;
