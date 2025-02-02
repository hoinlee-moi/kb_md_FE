import Link from "next/link";
import { Button } from "../ui/button";

export default function KbSocre() {
  return (
    <div className="bg-white rounded-md w-1/2 h-[150px] shadow-lg flex items-center justify-center flex-col">
      <p className="font-semibold">
        <span className="text-kb-main font-bold">KB</span> Score
      </p>
      <p className="text-3xl mt-2">
        <i>1,032 </i> 점
      </p>
      <Link href="/rank/nation">
        <Button className="bg-kb-main mt-3 text-kb-gray font-semibold" size="sm">
          랭킹보기
        </Button>
      </Link>
    </div>
  );
}
