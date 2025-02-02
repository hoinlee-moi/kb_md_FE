import RankingPoint from "@/components/rank/rankingPoint";
import RankList from "@/components/rank/rankList";
import { cn } from "@/lib/utils";
import Link from "next/link";

type PropsType = {
  params: Promise<{ seg: string }>;
};

export default async function Rank({ params }: PropsType) {
  const segmen = (await params).seg;
  return (
    <div className="b-nav-m flex flex-col items-center">
      <div className="mt-3 text-xl font-semibold">
        <h2>Ranking</h2>
      </div>
      <section className="w-3/4 border-b flex justify-center items-center">
        <RankingPoint segmen={segmen} />
      </section>
      <div className=" flex justify-between w-3/4 mt-2">
        <div className="flex flex-wrap items-center -m-1.5">
          <div className="m-1.5">
            <div className="flex">
              <Link
                href="/rank/nation"
                className={cn("btn bg-white border-gray-200 hover:bg-gray-50 text-gray-600 rounded-s-sm px-[5px] py-[2px]", {
                  "text-kb-main bg-kb-gray": segmen === "nation",
                })}
              >
                전국
              </Link>
              <Link
                href="/rank/region"
                className={cn("btn bg-white border-gray-200 hover:bg-gray-50 text-gray-600 rounded-e-sm px-[5px] py-[2px]", {
                  "text-kb-main bg-kb-gray": segmen === "region",
                })}
              >
                지역
              </Link>
            </div>
          </div>
        </div>
        <p className="text-xs text-slate-600">매일 아침 7시 업데이트</p>
      </div>
      <section className="mt-3 w-full px-5">
        <RankList segmen={segmen} />
      </section>
    </div>
  );
}
