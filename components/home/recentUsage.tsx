"use client";
import { cn } from "@/lib/utils";
import Icon from "../ui/icon";
import { useUser } from "@/hooks/user-context";
import { useState } from "react";

export default function RecentUsage() {
  const { user } = useUser();
  const [count, setCount] = useState(3);

  const addPlustListHandler = () => {
    setCount((prev) => (prev >= user.recentList.length ? prev : prev + 3));
  };

  return (
    <div>
      {/* <p className="text-lg font-bold border-b-2 border-black">최근 이용내역</p> */}
      <div className="flex flex-col space-y-1 ">
        {user.recentList.slice(0, count)?.map(({ amount, date, type, content }, idx) => (
          // category별 이미지 변환 생각
          <div className="flex items-center flex-nowrap" key={idx}>
            <div>
              <Icon alt="" src="/assets/moneyicon.jpg" className="" imgSize="32" />
            </div>
            <div className=" px-2 w-full font-semibold">
              <p className="">{content}</p>
              <p className="text-[11px] text-kb-gray">{date}</p>
            </div>
            <div>
              <p
                className={cn("font-bold text-warning text-nowrap", {
                  "text-blue-500": type === "income",
                  "text-warning": type === "expense",
                })}
              >
                {`${type === "income" ? "+" : "-"} ${amount.toLocaleString()}`}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center ">
        <button onClick={addPlustListHandler} className="text-slate-700 font-semibold">
          더보기 {"∨"}
        </button>
      </div>
    </div>
  );
}
