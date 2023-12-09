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
    url: "/admin/orders",
    label: "Orders",
  },
  {
    url: "/admin/customers",
    label: "Customers",
  },
  {
    url: "/admin/inventory",
    label: "Inventory",
  },
  {
    url: "/admin/conversations",
    label: "Conversations",
  },
  {
    url: "/admin/settings",
    label: "Settings",
  },
];

export default menu;
