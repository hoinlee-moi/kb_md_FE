"use client";
import { cn } from "@/lib/utils";

export default function SwiperNavigation({ current, idx, className }: { current: number; idx: number; className?: string }) {
  return <span className={cn("inline-block w-[10px] h-[10px] bg-kb-gray rounded-full", className, { "bg-kb-main": current === idx })} />;
}
