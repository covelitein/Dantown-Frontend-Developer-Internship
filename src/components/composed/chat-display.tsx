import React from "react";
import { Badge } from "../ui/badge";

export function ChatDisplay({
  color,
  name,
  msg,
  unread,
}: {
  color: string;
  name: string;
  msg: string;
  unread?: number;
}) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div
        className={`h-14 w-14 rounded-full`}
        style={{ background: color }}
      ></div>
      <div className="">
        <h4 className="font-semibold text-lg">{name}</h4>
        <p className="text-sm text-gray-500">{msg}</p>
      </div>
      {unread && (
        <Badge className="size-4 p-0 text-xs rounded-full bg-red-500 text-white hover:bg-red-500 flex items-center justify-center">
          {unread}
        </Badge>
      )}
    </div>
  );
}
