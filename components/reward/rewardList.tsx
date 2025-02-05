"use client";
import { useEffect, useReducer } from "react";
import RewardItem from "./rewardItem";
import { useCategory } from "@/hooks/category.context";
import { useReward } from "@/hooks/reward-contest";

export default function RewardList() {
  const { category } = useCategory();
  const { rewardInfo, reFetchList } = useReward();
  const [desc, changeDesc] = useReducer((prev) => !prev, false);

  useEffect(() => {
    reFetchList(category);
  }, [category]);

  const sortedList = () => {
    return rewardInfo.rewardList.sort((a) => {
      if (!desc) {
        if (a.status === "completed") return 1;
        if (a.status === "in_progress") return -1;
        return 0;
      } else {
        if (a.status === "completed") return -1;
        if (a.status === "in_progress") return 1;
        return 0;
      }
    });
  };

  return (
    <div className="mt-1">
      <div className="text-right mb-5 mr-2">
        <button className="inline-block text-sm font-bold" onClick={changeDesc}>
          <span className="text-xs -tracking-[6.5px] mr-2">{desc ? "↑↓" : "↓↑"}</span>
          진행중
        </button>
      </div>
      <ul className="w-full space-y-5 relative">
        {sortedList().map((data, id) => (
          <li key={id}>
            <RewardItem data={data} />
          </li>
        ))}
        {/* <li className="w-full">
          <RewardItem rewardState="진행" />
        </li>
        <li>
          <RewardItem rewardState="완료" />
        </li> */}
        {/* <li>
          <RewardItem data={DUMMY} />
        </li> */}
      </ul>
    </div>
  );
}

// const DUMMY = {
//   id: 1,
//   name: "rewar1",
//   category: "etc",
//   goal: 100,
//   points: 100,
//   rewardId: 2,
//   progress: 100,
//   status: "in_progress",
// };
