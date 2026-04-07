"use client";

import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavMain } from "@/components/nav-main";
import { SidebarApiStatus } from "@/components/sidebar-api-status";
import {
  Ambulance,
  Bed,
  Bone,
  FlaskConical,
  LayoutDashboard,
  Pill,
  Siren,
  Stethoscope,
} from "lucide-react";
import Image from "next/image";
import {
  IconBodyScan,
  IconDental,
  IconDisabled,
  IconMassage,
} from "@tabler/icons-react";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: LayoutDashboard,
    },
    {
      title: "OPD",
      url: "#",
      icon: Stethoscope,
    },
    {
      title: "ER",
      url: "#",
      icon: Siren,
    },
    {
      title: "IPD",
      url: "#",
      icon: Bed,
    },
    {
      title: "Refer Out",
      url: "#",
      icon: Ambulance,
    },
    {
      title: "Lab",
      url: "#",
      icon: FlaskConical,
    },
    {
      title: "X-ray",
      url: "#",
      icon: Bone,
    },
    {
      title: "CT",
      url: "#",
      icon: IconBodyScan,
    },
    {
      title: "ใบสั่งยา",
      url: "#",
      icon: Pill,
    },
    {
      title: "กายภาพ",
      url: "#",
      icon: IconDisabled,
    },
    {
      title: "ทันตกรรม",
      url: "#",
      icon: IconDental,
    },
    {
      title: "แผนไทย",
      url: "#",
      icon: IconMassage,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
            >
              <a href="#">
                <Image
                  src="/icon.png"
                  width={40}
                  height={40}
                  alt="banna hospital logo"
                />
                <div className="flex flex-col items-start">
                  <span className="text-base font-semibold">
                    โรงพยาบาลบ้านนา
                  </span>
                  {/* <span className="text-base font-semibold">
                    Banna Hospital
                  </span> */}
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <SidebarApiStatus />
      </SidebarFooter>
    </Sidebar>
  );
}
