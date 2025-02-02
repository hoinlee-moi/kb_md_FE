"use client";

import { useEffect, useState } from "react";
import RankItem from "./rankItem";
import { getNationalRanking, getRegionalRanking } from "@/actions/api";
import { useUserId } from "@/hooks/userId-context";
import MyRank from "./myRank";

export default function RankList({ segmen }: { segmen: string }) {
  const { userId } = useUserId();
  const [list, setList] = useState<GetRankData[]>([]);
  const [myRank, setMyRank] = useState<{ rank: number; score: number }>({
    rank: 0,
    score: 0,
  });

  useEffect(() => {
    // (async () => {
    //   try {
    //     let res: GetRankResponDate;
    //     if (segmen === "region") {
    //       res = await getNationalRanking(userId);
    //     } else {
    //       res = await getRegionalRanking(userId);
    //     }
    //     const sortRank = res[0].sort((a, b) => b.score - a.score);
    //     setList(sortRank);
    //     setMyRank(res[1]);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // })();
    const sortRank = Dummy[0].sort((a, b) => b.score - a.score);
    setList(sortRank);
    setMyRank(Dummy[1]);
  }, []);

  return (
    <div className="flex flex-col w-full space-y-2">
      {list.map((data, idx) => {
        if (myRank.rank === idx + 1) {
          return <MyRank score={myRank.score} rank={myRank.rank} key={idx} />;
        }
        return <RankItem data={{ ...data, rank: idx + 1 }} key={idx} />;
      })}
      {myRank.rank > 10 && <MyRank {...myRank} />}
    </div>
  );
}

const Dummy: GetRankResponDate = [
  [
    { region: "Daegu", score: 4253, username: "성기훈" },
    { region: "Seoul", score: 1204, username: "오영일" },
    { region: "Seoul", score: 527, username: "조상우" },
    { region: "Busan", score: 3583, username: "타노스" },
    { region: "Daegu", score: 2234, username: "박정배" },
    { region: "Busan", score: 7358, username: "남규" },
    { region: "Seoul", score: 1024, username: "경수" },
    { region: "Gangju", score: 3353, username: "오일남" },
    { region: "Busan", score: 4789, username: "장덕수" },
    { region: "Daegu", score: 9956, username: "한미녀" },
  ],
  { rank: 12, score: 4100 },
];
