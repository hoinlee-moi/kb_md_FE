"use client";

import { claimReward } from "@/actions/api";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

type PropsType = {
  data: GetRewardList & GetUserRewardState;
};

export default function RewardItem({
  data: { goal, name, rewardId, status, progress },
}: PropsType) {
  const router = useRouter();
  // const [state, setState] = useState(rewardState);

  // useEffect(() => {
  //   setState(rewardState);
  // }, [rewardState]);

  const depositSaving = async () => {
    try {
      const res = await claimReward(rewardId);
      if (res) router.refresh();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex items-center w-full px-2 border-b pb-2 justify-between">
      <p className="w-full font-semibold text-ellipsis text-nowrap overflow-hidden mr-1">
        {name}
      </p>
      {status === "in_progress" && progress !== goal ? (
        <p className=" text-nowrap">
          ( {progress} / {goal} )
        </p>
      ) : (
        <Button
          disabled={status === "completed"}
          className="bg-kb-sub h-[28px] text-kb-gray font-semibold px-2 shadow-sm disabled:bg-kb-gray disabled:text-white"
          size="sm"
          onClick={depositSaving}
        >
          {status === "in_progress" ? "수령" : "완료"}
        </Button>
      )}
    </div>
  );
}
