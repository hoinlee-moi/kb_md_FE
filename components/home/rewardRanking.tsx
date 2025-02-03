import Link from "next/link";
import { Button } from "../ui/button";
// import { useEffect, useState } from "react";
import { getRewardPoints } from "@/actions/api";

export default async function RewardRanking() {
  // const point = 0;
  const point = await getRewardPoints();
  // const [point, setPoint] = useState<number>(0);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const res = await getRewardPoints();
  //       setPoint(res);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   })();
  // }, []);

  return (
    <div className="bg-white rounded-md w-1/2 h-[150px] shadow-lg flex items-center justify-center flex-col">
      <p className="font-semibold">Reward Points</p>
      <p className="text-3xl mt-2">
        <i>{point}</i> 점
      </p>
      <Link href="/reward">
        <Button
          className="bg-kb-main mt-3 text-kb-gray font-semibold"
          size="sm"
        >
          도전과제
        </Button>
      </Link>
    </div>
  );
}
