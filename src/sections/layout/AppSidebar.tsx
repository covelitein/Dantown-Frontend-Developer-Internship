"use client";

import {
  UsersRound,
  Home,
  Clock4,
  Compass,
  UserRound,
  Bookmark,
  MessageSquareText,
  Calendar,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar";

const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Timeline",
    url: "#",
    icon: Clock4,
  },
  {
    title: "Community",
    url: "#",
    icon: UsersRound,
  },
  {
    title: "Discover",
    url: "#",
    icon: Compass,
  },
  {
    title: "Friends",
    url: "#",
    icon: UserRound,
  },
  {
    title: "Bookmark",
    url: "#",
    icon: Bookmark,
  },
  {
    title: "Event",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Discussion",
    url: "#",
    icon: MessageSquareText,
  },
];

const categories = [
  {
    title: "Sports",
    url: "#",
    icon: '/icons/sports.png',
  },
  {
    title: "Gaming",
    url: "#",
    icon: '/icons/game.png',
  },
  {
    title: "Music",
    url: "#",
    icon: '/icons/music.png',
  },
  {
    title: "Tech & Science",
    url: "#",
    icon: '/icons/tech.png',
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="shadow-none border-b-0">
      <SidebarContent className="bg-white shadow-none border-b-0 font-[family-name:var(--font-geist-sans)]">
        <SidebarHeader className="flex items-center justify-center py-4">
          <img src="/imgs/logo.png" alt="" className="w-40" />
        </SidebarHeader>
        <SidebarGroup className="-mt-3">
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={`py-6 [&_svg]:size-5 pl-6 gap-3 text-base ${item.title === "Home" ? "bg-gradient-to-l from-[#54BCBD]/10 to-[#54BCBD]/20 text-[#54BCBD]" : "text-[#777]"}`}
                  >
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <div className="px-4">
          <SidebarSeparator />
        </div>
        <SidebarGroup className="-mt-3 pb-9 pt-6">
          <SidebarGroupLabel className="pl-6 text-xl font-bold">Category</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {categories.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="py-6 [&_svg]:size-5 pl-6 gap-3 text-[#777] text-base"
                  >
                    <a href={item.url}>
                      <img src={item.icon} alt={item.title} className="size-10" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
