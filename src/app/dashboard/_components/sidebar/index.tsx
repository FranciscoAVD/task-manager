/* Khurram Ali */

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  HouseIcon,
  PanelLeftIcon,
  FileTextIcon,
  InboxIcon,
  ChartColumnIncreasingIcon,
  VideoIcon,
  TimerIcon,
  CircleEllipsisIcon,
  ChevronRightIcon,
  UserRoundPlusIcon,
  CircleHelpIcon,
  WaypointsIcon,
  Grid2X2Icon,
  PlusIcon,
} from "lucide-react";
import { TeamSpace } from "./team-space";

const SidebarNavLinks = [
  { icon: HouseIcon, label: "Home" },
  { icon: InboxIcon, label: "Inbox" },
  { icon: FileTextIcon, label: "Docs" },
  { icon: ChartColumnIncreasingIcon, label: "Dashboards" },
  { icon: VideoIcon, label: "Clips" },
  { icon: TimerIcon, label: "Timesheets" },
  { icon: CircleEllipsisIcon, label: "More" },
];

export const Sidebar = () => {
  return (
    <div className="flex h-full flex-col py-2">
      <div className="flex items-center gap-x-2 px-2">
        <Button variant="ghost" className="gap-x-2 whitespace-normal">
          <div className="size-4 shrink-0 rounded bg-black" />
          <span className="line-clamp-1 text-left">
            Khurram Ali&apos;s Workspace
          </span>
        </Button>

        <Button variant="ghost" size="icon" className="size-9 shrink-0">
          <PanelLeftIcon className="size-4" />
        </Button>
      </div>
      <Separator className="my-2" />

      <ul className="flex flex-col gap-y-0.5 px-2">
        {SidebarNavLinks.map(({ icon: Icon, label }) => (
          <li key={label}>
            <Button
              variant="ghost"
              className="h-fit w-full justify-start gap-x-2 font-normal"
            >
              <Icon className="size-4" />
              {label}
            </Button>
          </li>
        ))}
      </ul>
      <Separator className="my-2" />

      <div className="flex grow flex-col gap-y-2 px-2">
        <Button
          variant="ghost"
          className="h-fit w-full justify-start gap-x-1 text-xs"
        >
          Favorites
          <ChevronRightIcon className="size-4" />
        </Button>

        <span className="px-4 text-xs font-medium">Spaces</span>

        <ul className="flex flex-col gap-y-0.5">
          <li>
            <Button
              variant="ghost"
              className="h-fit w-full justify-start gap-x-2 font-normal"
            >
              <WaypointsIcon className="size-4" />
              Everything{" "}
            </Button>
          </li>

          <TeamSpace />

          <li>
            <Button
              variant="ghost"
              className="h-fit w-full justify-start gap-x-2 font-normal"
            >
              <Grid2X2Icon className="size-4" />
              View all Space
            </Button>
          </li>

          <li>
            <Button
              variant="ghost"
              className="h-fit w-full justify-start gap-x-2 font-normal"
            >
              <PlusIcon className="size-4" />
              Create Space
            </Button>
          </li>
        </ul>
      </div>

      <Separator className="my-2" />
      <div className="flex gap-x-1 px-2">
        <Button variant="ghost" className="h-fit flex-1 gap-x-1 font-normal">
          <UserRoundPlusIcon className="size-4" />
          Invite
        </Button>

        <Separator orientation="vertical" className="h-1/2 self-center" />

        <Button variant="ghost" className="h-fit flex-1 gap-x-1 font-normal">
          <CircleHelpIcon className="size-4" />
          Help
        </Button>
      </div>
    </div>
  );
};
