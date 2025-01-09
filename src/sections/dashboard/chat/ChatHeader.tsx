import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Bell, ChevronDown, Mail } from "lucide-react";
import React from "react";

export default function ChatHeader({ className }: { className?: string }) {
  return (
    <div>
      <div className={cn("flex items-center justify-end gap-5 mf:px-5 py-5", className)}>
        <Mail />
        <Bell />
        <div className="flex items-center gap-1">
          <Avatar>
            <AvatarImage src="/imgs/img.png" />
            <AvatarFallback>JR</AvatarFallback>
          </Avatar>
          <h3 className="max-sm:hidden">Jamet Roy</h3>
          <ChevronDown />
        </div>
      </div>
    </div>
  );
}
