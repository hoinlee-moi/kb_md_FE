"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export default function RewardItem({ rewardState }: { rewardState: string }) {
  // const [state, setState] = useState(rewardState);

  // useEffect(() => {
  //   setState(rewardState);
  // }, [rewardState]);
  return (
    <div className="flex items-center w-full px-2 border-b pb-2 justify-between">
      <p className="w-full font-semibold text-ellipsis text-nowrap overflow-hidden mr-1">
        리워드 아이템리워드 아이템리워드 아이템리워드 아이템리워드 아이템리워드 아이템리워드 아이템
      </p>
      {rewardState === "진행" ? (
        <p className=" text-nowrap">( 5 / 12 )</p>
      ) : (
        <Button
          disabled={rewardState === "완료"}
          className="bg-kb-sub h-[28px] text-kb-gray font-semibold px-2 shadow-sm disabled:bg-kb-gray disabled:text-white"
          size="sm"
        >
          {rewardState}
        </Button>
      )}
    </div>
  );
}
