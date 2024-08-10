//Created by Frank
/*Notes: Component tracks state between refreshes to get the users last view.
State management library may not be necessary as it is tracked in locale storage.
Name for the variable might need to include the workspace and other details to not 
conflict with other files*/

"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LOCAL_STORAGE_TABLE_VIEW } from "@/lib/constants";
type TTableViews = "Board" | "List" | "Calendar";
const tableViews: TTableViews[] = ["Board", "List", "Calendar"];
const defaultView = "List" as const;
export default function TableViews() {
  const [active, setActive] = useState<string>();

  //We only want to check if there is a view stored on load.
  useEffect(() => {
    const view = window.localStorage.getItem(LOCAL_STORAGE_TABLE_VIEW);
    if (view) {
      console.log("updated active from storage: ", view);
      setActive(view);
    } else setActive(defaultView);
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
    <section>
      <ul className="flex">
        {tableViews.map((v) => (
          <li key={v}>
            <Button
              variant={"ghost"}
              className={cn("border-b-4 border-transparent rounded-none", {
                "border-b-neutral-950": active === v,
              })}
              onClick={() => handleClick(v)}
            >
              {v}
            </Button>
          </li>
        ))}
      </ul>
    </section>
  );
}
