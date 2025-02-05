"use client";

import { claimReward } from "@/actions/api";
import { Button } from "../ui/button";
import { useReward } from "@/hooks/reward-contest";
import { useCategory } from "@/hooks/category.context";

type PropsType = {
  data: GetRewardList & GetUserRewardState;
};

export default function RewardItem({ data: { goal, name, rewardId, status, progress } }: PropsType) {
  const { category } = useCategory();
  const { reFetchList, reFetchPoint } = useReward();
  const depositSaving = async () => {
    try {
      await claimReward(rewardId);
      reFetchList(category);
      reFetchPoint();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex items-center w-full px-2 border-b pb-2 justify-between">
      <p className="w-full font-semibold text-ellipsis text-nowrap overflow-hidden mr-1">{name}</p>
      {status === "in_progress" && progress < goal ? (
        <p className=" text-nowrap">
          ( {progress} / {goal} )
        </p>
      ) : (
        <Button
          disabled={status === "completed"}
          className="bg-kb-sub h-[28px] text-kb-gray font-semibold px-2 shadow-sm disabled:bg-kb-gray disabled:text-white hover:bg-kb-sub"
          size="sm"
          onClick={depositSaving}
        >
          {status === "in_progress" ? "수령" : "완료"}
        </Button>
      )}
    </div>
  );
}
