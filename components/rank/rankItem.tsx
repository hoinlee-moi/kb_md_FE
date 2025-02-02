type PropsType = {
  data: GetRankData & { rank: number };
};

export default function RankItem({ data: { region, score, username, rank } }: PropsType) {
  return (
    <div className="flex w-full bg-white p-2 rounded-lg shadow-lg">
      <p className="w-[40px] font-bold border-r">{rank}.</p>
      <div className="flex text-nowrap w-full px-5 ">
        <p className="font-semibold w-1/4">{username}</p>
        <p className="w-2/4">{score.toLocaleString()} Points</p>
        <p className="w-1/4">{region}</p>
      </div>
    </div>
  );
}
