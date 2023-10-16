export interface MenuItem {
  label: string;
  url: string;
}

const menu = [
  { label: "All", url: "/search" },
  { label: "Phones", url: "/phones" },
  { label: "Pc Builds", url: "/pc-builds" },
];

export default menu;
