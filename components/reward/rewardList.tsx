"use client";
import { useEffect, useReducer, useState } from "react";
import RewardItem from "./rewardItem";
import { getRewardListByCategory, getUserRewardStatus } from "@/actions/api";
import { useCategory } from "@/hooks/category.context";

export default function RewardList() {
  const { category } = useCategory();
  const [list, setList] = useState<(GetRewardList & GetUserRewardState)[]>([]);
  const [desc, changeDesc] = useReducer((prev) => !prev, false);

  useEffect(() => {
    (async () => {
      try {
        const res = await getRewardListByCategory(
          category === "" ? "saving" : category
        );
        const listStates = await getUserRewardStatus();
        const rewardList = res.map((outerV) => {
          const findVal = listStates.find(
            (innerV) => innerV.rewardId === outerV.id
          );
          if (findVal) return { ...findVal, ...outerV };
          return { ...outerV, rewardId: 0, progress: 0, status: "" };
        });
        setList(rewardList);
      } catch (error) {
        console.error("카테고리 리스트 에러", error);
      }
    })();
  }, [category]);

  useEffect(() => {
    setList((prev) =>
      prev.sort((a) => {
        if (a.status === "완료") return 1;
        if (a.status === "진행중") return -1;
        return 0;
      })
    );
  }, [desc]);

  return (
    <div className="mt-1">
      <div className="text-right mb-5 mr-2">
        <button className="inline-block text-sm font-bold" onClick={changeDesc}>
          <span className="text-xs -tracking-[6.5px] mr-2">
            {desc ? "↑↓" : "↓↑"}
          </span>
          진행중
        </button>
      </div>
      <ul className="w-full space-y-5 relative">
        {list.map((data, id) => (
          <li key={id}>
            <RewardItem data={data} />
          </li>
        ))}
        {/* <li className="w-full">
          <RewardItem rewardState="진행" />
        </li>
        <li>
          <RewardItem rewardState="완료" />
        </li>
        <li>
          <RewardItem rewardState="수령" />
        </li> */}
      </ul>
    </div>
  );
}
