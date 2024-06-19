"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const Scope = ({ scope }: { scope: string[] }) => {
  const [open, setOpen] = useState(false);

  if (scope.length === 0) return null;

  return (
    <div
      className={cn(
        "relative flex flex-col overflow-hidden",
        open
          ? "max-h-none"
          : "max-h-[100px] after:absolute after:bottom-0 after:left-[-10px] after:right-[-30px] after:h-[50px] after:bg-gradient-to-t from-primary to-transparent after:transition-all after:duration-100 after:ease-in-out"
      )}>
      <ul className="list-disc list-inside">
        {scope.map((item, index) => (
          <li
            key={index}
            className={cn(
              open ? "hover:text-white transition-colors duration:300" : ""
            )}>
            {item}
          </li>
        ))}
      </ul>
      <button
        className={cn(
          "py-1 px-3 flex max-w-max items-center gap-2 text-primary text-xs z-20 bg-white rounded-full",
          open ? "mt-4" : "absolute bottom-0"
        )}
        onClick={() => setOpen(!open)}>
        {!open ? (
          <>
            <BsChevronDown /> See more
          </>
        ) : (
          <>
            <BsChevronUp /> See less
          </>
        )}
      </button>
    </div>
  );
};

export default Scope;
