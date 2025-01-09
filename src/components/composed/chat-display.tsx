import React from "react";

export function ChatDisplay({
  color,
  name,
  msg,
}: {
  color: string;
  name: string;
  msg: string;
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
    </div>
  );
}
