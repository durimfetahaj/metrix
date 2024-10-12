import React from "react";
import Link from "next/link";

import {
  LogoutLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import UserAvatar from "./UserAvatar";

const UserMenu = ({ isDashboard = false }: { isDashboard?: boolean }) => {
  const { getPermission } = getKindeServerSession();
  const role = getPermission("customer").isGranted ? "customer" : "admin";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="overflow-visible">
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <UserAvatar />
        </Button>
      </DropdownMenuTrigger>
      <div>
        <DropdownMenuContent>
          {role === "admin" && !isDashboard && (
            <>
              <DropdownMenuItem asChild>
                <Link href={`/dashboard`}>Dashboard</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
            </>
          )}
          <DropdownMenuItem className="cursor-pointer">
            <LogoutLink>Log out</LogoutLink>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </div>
    </DropdownMenu>
  );
};

export default UserMenu;
