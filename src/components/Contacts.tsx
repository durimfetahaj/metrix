"use client";

import ContactCard from "./ContactCard";
import { Input } from "./ui/input";

const Contacts = () => {
  return (
    <div className="max-h-[80vh] flex flex-col border border-zinc-700 rounded-md w-1/2">
      <div className="flex flex-col w-full py-3 px-5 gap-5">
        <div className="flex justify-between">
          <p>Contacts</p>
          <p>34</p>
        </div>
        <div>
          <Input type="search" placeholder="Search..." />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
