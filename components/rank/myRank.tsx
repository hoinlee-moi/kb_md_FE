"use client";
type PropsType = {
  rank: number;
  score: number;
  region: string;
};

export default function MyRank({ rank, score, region }: PropsType) {
  return (
    <div className="flex w-full bg-kb-main p-2 rounded-lg shadow-lg">
      <p className="w-[40px] font-bold border-r border-r-kb-gray">{rank}.</p>
      <div className="flex text-nowrap w-full px-5 ">
        <p className="font-semibold w-1/4">나</p>
        <p className="w-2/4">{score.toLocaleString()} Points</p>
        <p className="w-1/4">{region}</p>
      </div>
    </div>
  );
}
