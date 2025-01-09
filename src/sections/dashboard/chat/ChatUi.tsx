"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SendHorizontal, Smile, X } from "lucide-react";
import React from "react";

export default function ChatUi() {
  return (
    <div className="mf:px-3 mt-10">
      <Card className="border-none rounded-2xl overflow-hidden">
        <div className="flex items-center justify-between bg-[#5DC2C4] text-white px-4 py-4 rounded-b-0">
          <h3>Iron Men</h3>
          <X />
        </div>
        {/* date start */}
        <div className="flex items-center justify-center py-3">
          <Badge>Today</Badge>
        </div>
        {/* date end */}

        {/* chat bubble start */}
        <div className="flex flex-col px-3 gap-3 py-4">
          <div className="self-start flex items-end gap-1">
            <div className="p-2 bg-[#E0F3F3] text-[#5DC2C4] rounded-lg">
              <p className="text-sm">When will the event be held?</p>
            </div>
            <h3 className="text-[0.8rem]">10:22 am</h3>
          </div>
          <div className="self-end flex items-end gap-1">
            <h3 className="text-[0.8rem]">10:24 am</h3>
            <div className="p-2 bg-[#5DC2C4] text-white rounded-lg">
              <p className="text-sm">Tomorrow at 4 pm</p>
            </div>
          </div>
        </div>
        {/* chat bubble end */}

        {/* text field start */}
        <div className="px-3 py-4 flex items-center gap-2">
          <div className="relative w-full">
            <Input className="rounded-full placeholder:text-gray-400" placeholder="Type here..." />
            <Smile className="absolute right-3 top-2 text-gray-400"/>
          </div>
          <button className="p-2 rounded-full bg-orange-500 text-white">
            <SendHorizontal />
          </button>
        </div>
        {/* text field end */}
      </Card>
    </div>
  );
}
