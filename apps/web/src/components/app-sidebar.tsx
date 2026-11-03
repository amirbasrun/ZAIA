"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@study/ui/components/sidebar";
import { BookOpenIcon, Settings, TvIcon, VideoIcon } from "lucide-react";
import type { ComponentProps } from "react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";

const data = {
  navMain: [
    {
      title: "Series",
      url: "/series",
      icon: <TvIcon />,
    },
    {
      title: "Videos",
      url: "/videos",
      icon: <VideoIcon />,
    },
    {
      title: "Guides",
      url: "/guides",
      icon: <BookOpenIcon />,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: <Settings />,
    },
  ],
};

export const AppSidebar = ({
  ...props
}: ComponentProps<typeof Sidebar>) => (
  <Sidebar collapsible="icon" {...props}>
    <SidebarHeader className="justify-start">
      <div className="ml-2 text-lg font-semibold">Faceless Study</div>
    </SidebarHeader>
    <SidebarContent>
      <NavMain items={data.navMain} />
    </SidebarContent>
    <SidebarFooter>
      <NavUser />
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
);
