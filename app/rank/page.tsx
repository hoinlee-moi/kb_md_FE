import CategoryTab from "@/components/rank/categoryTab";
import RankingPoint from "@/components/rank/rankingPoint";
import RankList from "@/components/rank/rankList";
import { CategoryProvider } from "@/hooks/category.context";

export default async function Rank() {
  return (
    <div className="b-nav-m flex flex-col items-center">
      <div className="mt-3 text-xl font-semibold">
        <h2>
          <span className="text-kb-main">KB</span> Score
        </h2>
      </div>
      <section className="w-3/4 border-b flex justify-center items-center">
        <RankingPoint />
      </section>
      <CategoryProvider>
        <CategoryTab />
        <section className="mt-3 w-full px-5">
          <RankList />
        </section>
      </CategoryProvider>
    </div>
  );
}
