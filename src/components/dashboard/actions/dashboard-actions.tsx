import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  ChevronUp,
  SearchIcon,
  SettingsIcon,
  SlidersHorizontal,
} from "lucide-react";

const actions = [
  { icon: SearchIcon, label: "Search" },
  { icon: SlidersHorizontal, label: "Hide" },
  { icon: SettingsIcon, label: "Customize" },
];
export default function DashboardActions() {
  return (
    <div className="flex items-center gap-x-4">
      <ul className="flex gap-x-2">
        {actions.map(({ icon: Icon, label }) => (
          <li key={label}>
            <Button variant={"ghost"} className="gap-x-2 px-2">
              <Icon className="size-4" />
              {label}
            </Button>
          </li>
        ))}
      </ul>
      <Separator orientation="vertical" className="h-4 w-[1px]" />
      <Button size={"icon"} variant={"ghost"} className="bg-neutral-200 w-fit h-fit p-2 rounded-full">
        <ChevronUp className="size-4" />
      </Button>
    </div>
  );
}
