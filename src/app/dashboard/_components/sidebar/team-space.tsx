"use client";

/* Khurram Ali */

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  FileTextIcon,
  FolderIcon,
  ListIcon,
  UsersIcon,
} from "lucide-react";
import { useState } from "react";

export const TeamSpace = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
      <CollapsibleTrigger asChild>
        <Button
          variant="ghost"
          className="h-fit w-full justify-start font-normal"
          asChild
        >
          <li className="group flex items-center gap-x-2">
            <UsersIcon className="size-4 rounded bg-purple-200 ring-4 ring-purple-200 group-hover:hidden" />
            {isOpen ? (
              <ChevronDownIcon className="hidden size-4 rounded bg-gray-200 ring-4 ring-gray-200 group-hover:block" />
            ) : (
              <ChevronRightIcon className="hidden size-4 rounded bg-gray-200 ring-4 ring-gray-200 group-hover:block" />
            )}
            Team Space
          </li>
        </Button>
      </CollapsibleTrigger>

      <CollapsibleContent>
        <div className="flex flex-col gap-y-2">
          <ul>
            <Button
              variant="ghost"
              className="h-fit w-full justify-start gap-x-2 pl-8 text-xs"
            >
              <FolderIcon className="size-4" />
              Projects
            </Button>

            <li className="flex flex-col gap-y-2">
              <Button
                variant="ghost"
                className="h-fit w-full justify-start gap-x-2 pl-12 text-xs"
              >
                <ListIcon className="size-4" />
                Project 1
              </Button>

              <Button
                variant="ghost"
                className="h-fit w-full justify-start gap-x-2 pl-12 text-xs"
              >
                <ListIcon className="size-4" />
                Project 2
              </Button>

              <Button
                variant="ghost"
                className="h-fit w-full justify-start gap-x-2 pl-12 text-xs"
              >
                <FileTextIcon className="size-4" />
                Project Notes
              </Button>
            </li>
          </ul>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
