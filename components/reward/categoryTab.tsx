import { cn } from "@/lib/utils";
import Link from "next/link";

type PropsType = {
  param: string;
};

export default function CategoryTab({ param }: PropsType) {
  return (
    <div className="relative w-full">
      <div className="absolute bottom-0 w-full h-px bg-gray-200 dark:bg-gray-700/60" aria-hidden="true"></div>
      <ul className="relative w-full text-sm font-semibold flex justify-evenly flex-nowrap  overflow-x-scroll no-scrollbar">
        <li className="mr-6 last:mr-0 first:pl-4 last:pr-4">
          <Link
            className={cn("block pb-3  whitespace-nowrap ", { "text-kb-main border-b-2 border-kb-main": param === "savings" })}
            href="/reward/savings"
          >
            저축
          </Link>
        </li>
        <li className="mr-6 last:mr-0 first:pl-4 last:pr-4">
          <Link
            className={cn("block pb-3  whitespace-nowrap ", { "text-kb-main border-b-2 border-kb-main": param === "habits" })}
            href="/reward/habits"
          >
            습관
          </Link>
        </li>
        <li className="mr-6 last:mr-0 first:pl-4 last:pr-4">
          <Link
            className={cn("block pb-3  whitespace-nowrap ", { "text-kb-main border-b-2 border-kb-main": param === "consumption" })}
            href="/reward/consumption"
          >
            소비
          </Link>
        </li>
        <li className="mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
          <Link className={cn("block pb-3  whitespace-nowrap ", { "text-kb-main border-b-2 border-kb-main": param === "etc" })} href="/reward/etc">
            기타
          </Link>
        </li>
      </ul>
    </div>
  );
}
