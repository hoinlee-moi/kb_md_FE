import { cn } from "@/lib/utils";
import Icon from "../ui/icon";

export default function RecentUsage() {
  return (
    <div>
      {/* <p className="text-lg font-bold border-b-2 border-black">최근 이용내역</p> */}
      <div className="flex flex-col space-y-1 ">
        {DUMMY.map(({ amount, date, type, content }, idx) => (
          // category별 이미지 변환 생각
          <div className="flex items-center flex-nowrap" key={idx}>
            <div>
              <Icon alt="" src="/assets/moneyicon.jpg" className="" imgSize="32" />
            </div>
            <div className=" px-2 w-full font-semibold">
              <p className="">{content}</p>
              <p className="text-[11px] text-kb-gray">{date}</p>
            </div>
            <div>
              <p
                className={cn(" font-bold text-warning text-nowrap", {
                  "text-blue-500": type === "수입",
                })}
              >
                {`${type === "수입" ? "+" : "-"} ${amount.toLocaleString()}`}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center ">
        <button className="text-slate-700 font-semibold">더보기 {">"}</button>
      </div>
    </div>
  );
}

const DUMMY = [
  {
    amount: 34000,
    category: "음식",
    date: "2024.12.11",
    type: "지출",
    content: "네이버페이충전",
  },
  {
    amount: 1500000,
    category: "근로",
    date: "2025.01.15",
    type: "수입",
    content: "수당",
  },
  {
    amount: 17000,
    category: "음식",
    date: "2024.12.11",
    type: "지출",
    content: "우아한형제들",
  },
  {
    amount: 144000,
    category: "패션",
    date: "2024.12.11",
    type: "지출",
    content: "헥토파이낸셜",
  },
  {
    amount: 1500,
    category: "교통",
    date: "2024.12.11",
    type: "지출",
    content: "티머니충전",
  },
];
