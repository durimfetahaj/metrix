import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import UserAvatar from "./UserAvatar";

const UserMenu = ({ isDashboard }: { isDashboard?: boolean }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="overflow-visible">
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <UserAvatar />
        </Button>
      </DropdownMenuTrigger>
      <div>
        <DropdownMenuContent>
          <DropdownMenuItem asChild>
            {isDashboard ? (
              <Link className="cursor-pointer" href="/">
                Home
              </Link>
            ) : (
              <Link className="cursor-pointer" href="/dashboard">
                Dashboard
              </Link>
            )}
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer">
            <LogoutLink>Log out</LogoutLink>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </div>
    </DropdownMenu>
  );
};

export default UserMenu;
