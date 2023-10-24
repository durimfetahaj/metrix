"use client";
import { trpc } from "@/app/_trpc/client";
import { Icons } from "@/components/Icons";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";

const UserAvatar = () => {
  const { data: user } = trpc.getUser.useQuery();

  return (
    <Avatar className="h-8 w-8">
      {user?.picture ? (
        <Image
          fill
          src={user?.picture}
          alt="profile picture"
          referrerPolicy="no-referrer"
        />
      ) : (
        <AvatarFallback>
          <span className="sr-only">{user?.email}</span>
          <Icons.user className="h-4 w-4 text-zinc-900" />
        </AvatarFallback>
      )}
    </Avatar>
  );
};

export default UserAvatar;
