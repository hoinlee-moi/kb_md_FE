import CategoryTab from "@/components/reward/categoryTab";
import RewardList from "@/components/reward/rewardList";
import RewardPoint from "@/components/reward/rewardPoint";

type PropsType = {
  params: Promise<{ category: string }>;
};

export default async function Reward({ params }: PropsType) {
  const param = (await params).category;

  return (
    <div className="b-nav-m flex flex-col items-center">
      <div className="mt-3 text-xl font-semibold">
        <h2>Reward Points</h2>
      </div>
      <RewardPoint />
      <div className="px-5 mt-6 relative w-full">
        <CategoryTab param={param} />
      </div>
      <div className="w-full mt-1 px-5">
        <RewardList category={param} />
      </div>
    </div>
  );
}
