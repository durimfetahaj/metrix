import Contacts from "@/components/Contacts";
import { Button } from "@/components/ui/button";
import CreateConversation from "@/components/dashboard/conversation/create/create-conversation";

const Page = () => {
  return (
    <div className="container flex flex-col gap-10">
      <div className="flex justify-between">
        <p className="font-bold text-3xl">Conversations</p>
        <CreateConversation />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Contacts />
      </div>
    </div>
  );
};

export default Page;
