"use client";

import { Icons } from "@/components/Icons";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";

const UserAvatar = () => {
  // const { data: profile } = trpc.getProfile.useQuery();/

  return (
    // <Avatar className="h-10 w-10">
    //   {profile?.imageUrl ? (
    //     <Image
    //       fill
    //       src={profile.imageUrl}
    //       alt="profile picture"
    //       referrerPolicy="no-referrer"
    //     />
    //   ) : (
    //     <AvatarFallback>
    //       {/* <span className="sr-only">{profile?.email}</span> */}
    //       <Icons.user className="h-4 w-4 text-zinc-900" />
    //     </AvatarFallback>
    //   )}
    // </Avatar>
    "Avatar"
  );
};

export default UserAvatar;
