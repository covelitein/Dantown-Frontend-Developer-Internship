"use client";

import React, { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const MOBILE_BREAKPOINT = 990; // Define your breakpoint

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  if (isMobile) {
    return (
      <Sheet>
        <SheetTrigger>
          <Button
            aria-label="Open Chat"
            className="fixed bottom-4 right-4 bg-[#54BCBD] hover:bg-[#54BCBD] text-white p-3 rounded-full shadow-lg [&_svg]:size-6"
          >
            <MessageSquare />
          </Button>
        </SheetTrigger>
        <SheetContent className="overflow-y-scroll h-full max-sm:w-full px-1">
          <div className="p-4">{children}</div>
        </SheetContent>
      </Sheet>
    );
  }

  return <div>{children}</div>;
}
