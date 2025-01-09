"use client";

import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Search } from "lucide-react";
import React from "react";
import { ChatHeader } from "./chat";

export default function Header() {
  return (
    <div className="px-4 sm:py-5">
      <div className="flex items-center justify-between mb-5">
        <SidebarTrigger className="[&_svg]:size-5 sbp:hidden " />
        <ChatHeader className="mf:hidden" />
      </div>
      <div className="flex sm:items-center justify-between max-sm:flex-col max-sm:gap-3">
        <div className="flex-1">
          <h3 className="text-3xl font-semibold">Hey Dustin!</h3>
          <p className="text-gray-500">Welcome back, nice to see you again!</p>
        </div>
        <div className="relative max-sm:order-first max-sm:w-full">
          <Search className="absolute top-1.5 left-3 text-gray-500" />
          <Input
            placeholder="Search here..."
            className="sm:w-[17rem] border-0 rounded-full pl-12"
          />
        </div>
      </div>
    </div>
  );
}
