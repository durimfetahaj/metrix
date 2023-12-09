"use client";

import { trpc } from "@/app/_trpc/client";
import ContactCard from "@/components/ContactCard";
import Contacts from "@/components/Contacts";
import { Icons } from "@/components/Icons";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const CreateConversation = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const { data: customers, isLoading } = trpc.getCustomers.useQuery();

  return (
    <form>
      <AlertDialog open={isOpen} onOpenChange={() => setIsOpen(true)}>
        <AlertDialogTrigger asChild>
          <Button>New Message</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <div className="flex justify-between ">
              <AlertDialogTitle>New Message</AlertDialogTitle>
              <Icons.cross
                className="hover:cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            </div>
            <AlertDialogDescription>
              Search a customer to start a conversation
            </AlertDialogDescription>
          </AlertDialogHeader>

          <Input type="search" placeholder="Search..." />

          {/* {isLoading ? (
            <p>Loading...</p>
          ) : (
            customers?.map((customer) => (
              <ContactCard
                key={customer.id}
                contact={customer}
                onDoubleClick={() => setIsOpen(false)}
              />
            ))
          )} */}
        </AlertDialogContent>
      </AlertDialog>
    </form>
  );
};

export default CreateConversation;
