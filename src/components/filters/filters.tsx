// filters icons - Smiley

"use client";

import {
  CircleCheckIcon,
  Columns3Icon,
  LayersIcon,
  ListFilterIcon,
  LucideProps,
  UserIcon,
  UsersIcon,
  WorkflowIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import { cn } from "@/lib/utils";

// step 1 created the initial view of filters with an applied property
const initialFilters = [
  {
    applied: false,
    icon: LayersIcon,
    label: "Group",
  },
  {
    applied: false,
    icon: WorkflowIcon,
    label: "Subtasks",
  },
  {
    applied: false,
    icon: Columns3Icon,
    label: "Columns",
  },
  {
    applied: false,
    icon: ListFilterIcon,
    label: "Filters",
  },
  {
    applied: false,
    icon: UserIcon,
    label: "Me",
  },
  {
    applied: false,
    icon: UsersIcon,
    label: "Assist",
  },
  {
    applied: false,
    icon: CircleCheckIcon,
    label: "Show closed",
  },
];

export default function Filters() {
  const [filters, setChosenFilters] = useState(initialFilters);

  // on click we take the label as a param and set the applied to the opposite
  const handleSettingFilter = (label: string) => {
    const updatedFilters = filters.map((filter) => {
      if (filter.label === label) {
        filter.applied = !filter.applied;

        return filter;
      }

      return filter;
    });

    setChosenFilters(updatedFilters);
  };
  return (
    <ul className="flex flex-grow items-center gap-1 px-3">
      {filters.map(({ applied, icon: Icon, label }) => (
        <FilterItem
          applied={applied}
          key={label}
          Icon={Icon}
          label={label}
          onClick={() => handleSettingFilter(label)}
        />
      ))}
      <li className="p-3">
        <Button
          variant="ghost"
          className="h-fit w-full justify-start gap-x-2 font-normal"
        >
          Hide
        </Button>
      </li>
      <Input placeholder="Search tasks" />
    </ul>
  );
}

type FilterItemProps = {
  applied: boolean;
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  label: string;
  onClick: () => void;
};

function FilterItem({ applied, Icon, label, onClick }: FilterItemProps) {
  return (
    <li className="w-full" key={label}>
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start gap-x-2 rounded-full border font-normal text-purple-900/70 hover:bg-purple-900/10 hover:text-purple-900/70",
          { "bg-purple-900/20": applied },
        )}
        onClick={onClick}
      >
        <Icon />
        {label}
      </Button>
    </li>
  );
}
