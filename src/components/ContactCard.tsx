import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

type Props = {
  contact: {
    imageUrl: string;
    name: string;
    message?: string;
    lastActivity?: string;
    status: string;
    address?: string;
  };
};

const ContactCard = ({ contact, onDoubleClick }: any) => {
  return (
    <li className="list-none">
      <Button
        variant="ghost"
        className="flex items-center gap-5 px-6 py-3 hover:cursor-pointer focus:bg-primary w-full h-full rounded-none focus:text-white text-zinc-500 "
        onDoubleClick={onDoubleClick}
      >
        <Avatar>
          <AvatarImage src={contact?.imageUrl} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-1.5 w-full">
          <div className="flex justify-between">
            <p className="font-medium text-white">{contact?.name}</p>
            <p>New</p>
          </div>
          <div className="flex items-center gap-2.5">
            {contact?.title && (
              <p className="text-sm font-normal  truncate max-w-[200px]">
                {contact?.title}
              </p>
            )}
            <p className="text-xs font-normal ">12:55 am</p>
          </div>
        </div>
      </Button>
    </li>
  );
};

export default ContactCard;
