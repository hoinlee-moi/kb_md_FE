"use client";
import { useCategory } from "@/hooks/category.context";
import { cn } from "@/lib/utils";

export default function CategoryTab() {
  const { category, setCategory } = useCategory();
  return (
    <div className=" flex justify-between w-3/4 mt-2">
      <div className="flex flex-wrap items-center -m-1.5">
        <div className="m-1.5">
          <div className="flex">
            <button
              className={cn(
                "btn bg-white border-gray-200 hover:bg-gray-50 text-gray-600 rounded-s-sm px-[5px] py-[2px]",
                {
                  "text-kb-main bg-kb-gray": category === "nation",
                }
              )}
              onClick={() => setCategory("nation")}
            >
              전국
            </button>
            <button
              className={cn(
                "btn bg-white border-gray-200 hover:bg-gray-50 text-gray-600 rounded-e-sm px-[5px] py-[2px]",
                {
                  "text-kb-main bg-kb-gray": category === "region",
                }
              )}
              onClick={() => setCategory("region")}
            >
              지역
            </button>
          </div>
        </div>
      </div>
      <p className="text-xs text-slate-600">매일 아침 7시 업데이트</p>
    </div>
  );
}
