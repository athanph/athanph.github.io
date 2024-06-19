"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";

import Nav from "./Nav";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-center">
        <CiMenuFries className="text-[32px] text-accent" title="Menu" />
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-8">
        <Nav direction="column" />
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
