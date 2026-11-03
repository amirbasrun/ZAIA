"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@study/ui/components/sidebar";
import { TvIcon, VideoIcon, BookOpenIcon, Settings } from "lucide-react";
import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
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
}: React.ComponentProps<typeof Sidebar>) => (
  <Sidebar collapsible="icon" {...props}>
    <SidebarHeader className="justify-start">
      <div className="ml-2 text-lg font-semibold">Faceless Study</div>
    </SidebarHeader>
    <SidebarContent>
      <NavMain items={data.navMain} />
    </SidebarContent>
    <SidebarFooter>
      <NavUser user={data.user} />
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
);
