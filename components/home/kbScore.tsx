import Link from "next/link";
import { Button } from "../ui/button";
// import { useEffect, useState } from "react";
import { getUserKBScore } from "@/actions/api";

export default async function KbSocre() {
  // const score = 0;
  const score = await getUserKBScore();
  // const [score, setScore] = useState<number>(0);
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const res = await getUserKBScore();
  //       setScore(res);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   })();
  // }, []);

  return (
    <div className="bg-white rounded-md w-1/2 h-[150px] shadow-lg flex items-center justify-center flex-col">
      <p className="font-semibold">
        <span className="text-kb-main font-bold">KB</span> Score
      </p>
      <p className="text-3xl mt-2">
        <i>{score} </i> 점
      </p>
      <Link href="/rank">
        <Button className="bg-kb-main mt-3 text-kb-gray font-semibold" size="sm">
          랭킹보기
        </Button>
      </Link>
    </div>
  );
}
