"use client";

import Link from "next/link";
import HomeSvg from "./svg/homesvg";
import RankSvg from "./svg/ranksvg";
import RewardSvg from "./svg/rewardsvg";
import { usePathname } from "next/navigation";

export default function TabBar() {
  const pathname = usePathname().slice(1);
  return (
    <nav className=" rounded-t-xl fixed bottom-0 left-0 w-full h-[40px] z-50 border-t-[0.5px] border-slate-200 bg-slate-100">
      <div className="flex items-center justify-evenly h-full">
        <Link href="/">
          <HomeSvg fill={pathname === ""} />
        </Link>
        <Link href="/rank">
          <RankSvg fill={pathname === "rank"} />
        </Link>
        <Link href="/reward/saving">
          <RewardSvg fill={pathname === "reward"} />
        </Link>
      </div>
    </nav>
  );
}
