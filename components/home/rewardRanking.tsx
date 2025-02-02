import Link from "next/link";
import { Button } from "../ui/button";

export default function RewardRanking() {
  return (
    <div className="bg-white rounded-md w-1/2 h-[150px] shadow-lg flex items-center justify-center flex-col">
      <p className="font-semibold">Reward Points</p>
      <p className="text-3xl mt-2">
        <i>500</i> 점
      </p>
      <Link href="/reward/saving">
        <Button className="bg-kb-main mt-3 text-kb-gray font-semibold" size="sm">
          도전과제
        </Button>
      </Link>
    </div>
  );
}
