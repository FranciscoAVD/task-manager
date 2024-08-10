//Written by Frank
/*Notes: Chose flex-box for the layout because I don't think we'll need to scroll the page. Everything should fit screen height. 
I use "grow" class on the main tag in dashboard page to let the browser handle the height calc.*/
import DashboardHeader from "@/components/dashboard/header/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Task Manager - Dashboard",
  // description: "Generated by create next app",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen">
      <DashboardHeader />
      {children}
    </div>
  );
}
