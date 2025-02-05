import CategoryTab from "@/components/reward/categoryTab";
import RewardList from "@/components/reward/rewardList";
import RewardPoint from "@/components/reward/rewardPoint";
import { CategoryProvider } from "@/hooks/category.context";
import { RewardContextProvider } from "@/hooks/reward-contest";

export default async function Reward() {
  return (
    <RewardContextProvider>
      <div className="b-nav-m flex flex-col items-center">
        <div className="mt-3 text-xl font-semibold">
          <h2>Reward Points</h2>
        </div>
        <RewardPoint />
        <CategoryProvider>
          <div className="px-5 mt-6 relative w-full">
            <CategoryTab />
          </div>
          <div className="w-full mt-1 px-5">
            <RewardList />
          </div>
        </CategoryProvider>
      </div>
    </RewardContextProvider>
  );
}
