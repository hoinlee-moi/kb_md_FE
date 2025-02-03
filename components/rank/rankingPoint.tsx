// "use client";
import PointSection from "../PointSection";
// import { useEffect, useState } from "react";
import { getUserKBScore } from "@/actions/api";

export default async function RankingPoint() {
  const score = await getUserKBScore();
  // const [score, setScore] = useState(8000);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       let res: number;
  //       if (segmen === "region") {
  //         res = await getRegionalRanking();
  //       } else {
  //         res = await getNationalRanking();
  //       }
  //       setScore(res);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   })();
  // }, []);

  return <PointSection num={score} />;
}
