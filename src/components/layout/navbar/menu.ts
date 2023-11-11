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
    url: "/admin",
    label: "Dashboard",
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
    url: "/dashboard/conversations",
    label: "Conversations",
  },
  {
    url: "/dashboard/settings",
    label: "Settings",
  },
];

export default menu;
