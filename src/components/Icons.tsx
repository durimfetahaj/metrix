import {
  Ghost,
  LucideProps,
  Menu,
  ShoppingCart,
  User,
  X,
  LayoutDashboard,
  Folders,
  MessageCircle,
  Settings,
  PanelLeftOpen,
  PanelRightOpen,
  UploadCloud,
  Trash,
  Minus,
  Plus,
} from "lucide-react";

export const Icons = {
  user: User,
  cross: X,
  cart: ShoppingCart,
  ghost: Ghost,
  dashboard: LayoutDashboard,
  inventory: Folders,
  conversations: MessageCircle,
  settings: Settings,
  sidebarOpen: PanelLeftOpen,
  sideBarClose: PanelRightOpen,
  uploadCloud: UploadCloud,
  trash: Trash,
  minus: Minus,
  plus: Plus,
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
  uploadDummy: (props: LucideProps) => (
    <svg
      {...props}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.4"
        d="M34.1102 47.3332H13.8881C5.97975 47.3332 0.666992 41.7866 0.666992 33.5298V14.4722C0.666992 6.21543 5.97975 0.666504 13.8881 0.666504H34.1126C42.0209 0.666504 47.3337 6.21543 47.3337 14.4722V33.5298C47.3337 41.7866 42.0209 47.3332 34.1102 47.3332Z"
        fill="#22c55e44"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22.2382 16.2416C22.2382 19.4383 19.6366 22.0399 16.4399 22.0399C13.2409 22.0399 10.6416 19.4383 10.6416 16.2416C10.6416 13.0449 13.2409 10.4409 16.4399 10.4409C19.6366 10.4409 22.2382 13.0449 22.2382 16.2416ZM41.2675 28.871C41.8112 29.3983 42.2008 30.0003 42.4575 30.642C43.2345 32.5833 42.8308 34.9167 42.0002 36.8393C41.0155 39.1283 39.1302 40.8573 36.7548 41.6133C35.7002 41.9517 34.5942 42.0963 33.4905 42.0963H13.9348C11.9888 42.0963 10.2668 41.6437 8.85517 40.7943C7.97083 40.2623 7.8145 39.0373 8.47017 38.2393C9.56683 36.9093 10.6495 35.5747 11.7415 34.2283C13.8228 31.6523 15.2252 30.9057 16.7838 31.5613C17.4162 31.832 18.0508 32.2403 18.7042 32.6697C20.4448 33.8223 22.8645 35.4043 26.0518 33.687C28.2305 32.4957 29.4952 30.4571 30.596 28.6827L30.6182 28.647C30.6922 28.5282 30.7657 28.4095 30.8389 28.2912C31.2132 27.6864 31.5819 27.0907 31.9995 26.5423C32.5175 25.8633 34.4402 23.74 36.9252 25.252C38.5095 26.204 39.8418 27.492 41.2675 28.871Z"
        fill="#22C55E"
      />
    </svg>
  ),
  circleX: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-circle-x"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </svg>
  ),
};
