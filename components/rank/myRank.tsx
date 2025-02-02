type PropsType = {
  rank: number;
  score: number;
};

export default function MyRank({ rank, score }: PropsType) {
  return (
    <div className="flex w-full bg-kb-main p-2 rounded-lg shadow-lg">
      <p className="w-[40px] font-bold border-r border-r-kb-gray">{rank}.</p>
      <div className="flex text-nowrap w-full px-5 ">
        <p className="font-semibold w-1/4">나</p>
        <p className="w-2/4">{score.toLocaleString()} Points</p>
      </div>
    </div>
  );
}
