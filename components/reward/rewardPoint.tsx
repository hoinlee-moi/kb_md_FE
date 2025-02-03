"use client";
import { useUserId } from "@/hooks/userId-context";
import PointSection from "../PointSection";
import { useEffect, useState } from "react";
import { getRewardPoints } from "@/actions/api";

export default function RewardPoint() {
  const { userId } = useUserId();
  const [point, setPoint] = useState(354);
  //   useEffect(() => {
  //     (async () => {
  //       try {
  //         const res = await getRewardPoints(userId);
  //         setPoint(res);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     })();
  //   }, []);
  return <PointSection num={point} />;
}
