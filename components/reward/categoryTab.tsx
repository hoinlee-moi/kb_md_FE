"use client";
import { useCategory } from "@/hooks/category.context";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

export default function CategoryTab() {
  const { category, setCategory } = useCategory();
  useEffect(() => {
    setCategory("saving");
  }, []);
  return (
    <div className="relative w-full">
      <div
        className="absolute bottom-0 w-full h-px bg-gray-200 dark:bg-gray-700/60"
        aria-hidden="true"
      ></div>
      <ul className="relative w-full text-sm font-semibold flex justify-evenly flex-nowrap  overflow-x-scroll no-scrollbar">
        <li className="mr-6 last:mr-0 first:pl-4 last:pr-4">
          <button
            className={cn("block pb-3  whitespace-nowrap ", {
              "text-kb-main border-b-2 border-kb-main": category === "saving",
            })}
            onClick={() => setCategory("saving")}
          >
            저축
          </button>
        </li>
        <li className="mr-6 last:mr-0 first:pl-4 last:pr-4">
          <button
            className={cn("block pb-3  whitespace-nowrap ", {
              "text-kb-main border-b-2 border-kb-main": category === "habit",
            })}
            onClick={() => setCategory("habit")}
          >
            습관
          </button>
        </li>
        <li className="mr-6 last:mr-0 first:pl-4 last:pr-4">
          <button
            className={cn("block pb-3  whitespace-nowrap ", {
              "text-kb-main border-b-2 border-kb-main": category === "spending",
            })}
            onClick={() => setCategory("spending")}
          >
            소비
          </button>
        </li>
        <li className="mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
          <button
            className={cn("block pb-3  whitespace-nowrap ", {
              "text-kb-main border-b-2 border-kb-main": category === "etc",
            })}
            onClick={() => setCategory("etc")}
          >
            기타
          </button>
        </li>
      </ul>
    </div>
  );
}
