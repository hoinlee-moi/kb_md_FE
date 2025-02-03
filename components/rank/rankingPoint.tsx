"use client";
import { useUserId } from "@/hooks/userId-context";
import PointSection from "../PointSection";
import { useEffect, useState } from "react";
import { getNationalRanking, getRegionalRanking } from "@/actions/api";

export default function RankingPoint({ segmen }: { segmen: string }) {
  const { userId } = useUserId();
  const [score, setScore] = useState(8000);

  //   useEffect(() => {
  //     (async () => {
  //       try {
  //         let res: number;
  //         if (segmen === "region") {
  //           res = await getRegionalRanking(userId);
  //         } else {
  //           res = await getNationalRanking(userId);
  //         }
  //         setScore(res);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     })();
  //   }, []);

  return <PointSection num={score} />;
}
