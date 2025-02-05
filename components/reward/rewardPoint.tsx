"use client";
import { useReward } from "@/hooks/reward-contest";
import PointSection from "../PointSection";

export default function RewardPoint() {
  const { rewardInfo } = useReward();
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
  return <PointSection num={rewardInfo.rewardPoint} />;
}
