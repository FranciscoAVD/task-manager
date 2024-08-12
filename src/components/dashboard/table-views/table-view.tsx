//Created by Frank
/*Notes: Component tracks state between refreshes to get the users last view.
State management library may not be necessary as it is tracked in locale storage.
Name for the variable might need to include the workspace and other details to not 
conflict with other files*/

"use client";

import {
  Columns2Icon,
  ListIcon,
  CalendarIcon,
  LucideProps,
  PlusIcon,
} from "lucide-react";
import {
  useState,
  useEffect,
  ForwardRefExoticComponent,
  RefAttributes,
} from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LOCAL_STORAGE_TABLE_VIEW } from "@/lib/constants";
import { Separator } from "@/components/ui/separator";
type TTableViews = "Board" | "List" | "Calendar";
const tableViews: {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  label: TTableViews;
}[] = [
  { label: "Board", icon: Columns2Icon },
  { label: "List", icon: ListIcon },
  { label: "Calendar", icon: CalendarIcon },
];
const DefaultView = "List" as const;
export default function TableViews() {
  const [active, setActive] = useState<string>();

  //We only want to check if there is a view stored on load.
  useEffect(() => {
    const view = window.localStorage.getItem(LOCAL_STORAGE_TABLE_VIEW);
    if (view) {
      console.log("updated active from storage: ", view);
      setActive(view);
    } else setActive(DefaultView);
  }, []);

  useEffect(() => {
    if (active) {
      window.localStorage.setItem(LOCAL_STORAGE_TABLE_VIEW, active);
    }
  }, [active]);

  function handleClick(value: TTableViews) {
    setActive(value);
  }
  return (
    <div className="flex items-center gap-x-4">
      <ul className="flex">
        {tableViews.map(({ icon: Icon, label }) => (
          <li key={label}>
            <Button
              variant={"ghost"}
              className={cn(
                "gap-x-2 border-b-4 border-transparent px-2 font-semibold",
                {
                  "border-b-neutral-950": active === label,
                  "text-black/70": active !== label,
                },
              )}
              onClick={() => handleClick(label)}
            >
              <Icon className="size-4" />
              {label}
            </Button>
          </li>
        ))}
      </ul>
      <Separator orientation="vertical" className="h-4 w-[1px]" />
      <Button
        variant={"ghost"}
        className="gap-x-2 px-2 text-black/70"
      >
        <PlusIcon className="size-4" />
        Views
      </Button>
    </div>
  );
}
