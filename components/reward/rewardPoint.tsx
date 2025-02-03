// "use client";
import PointSection from "../PointSection";
// import { useEffect, useState } from "react";
import { getRewardPoints } from "@/actions/api";

export default async function RewardPoint() {
  const point = await getRewardPoints();
  // const [point, setPoint] = useState(0);
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
  return <PointSection num={point} />;
}
