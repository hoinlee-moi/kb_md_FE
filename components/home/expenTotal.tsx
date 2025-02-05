"use client";

import { useUser } from "@/hooks/user-context";
import { cn } from "@/lib/utils";

export default function ExpenTotal() {
  const { user } = useUser();
  const date = new Date();
  const month = date.getMonth() + 1;

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const lastMonth = await getMonthlyIncomeAndExpense(String(month - 1));
  //       const curMonth = await getMonthlyIncomeAndExpense(String(month));
  //       const totalAcc = await getTotalAccountBalance();

  //       setData({
  //         monthSum: String(curMonth.totalSum),
  //         total: String(totalAcc.userBalance),
  //         lastCurSum: lastMonth.totalSum - curMonth.totalSum,
  //       });
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   })();
  // }, []);

  return (
    <div className="text-center w-full">
      <div className="flex items-center justify-between ">
        <div className="text-center w-1/2">
          <p>{month}월 수입 지출 합계</p>
          <p
            className={cn("font-semibold text-xl text-blue-500", {
              "text-warning": Math.sign(user.monthlyAccount) > 0 ? false : true,
            })}
          >
            {Math.sign(user.monthlyAccount) > 0 ? "+" : "-"}
            {user.monthlyAccount.toLocaleString()}
          </p>
        </div>
        <div className="text-center w-1/2">
          <p>계좌 총 잔액</p>
          <p className="font-semibold text-xl">{user.totalAccount.toLocaleString()}</p>
        </div>
      </div>
      <p className="mt-2">
        지난달 보다 {Math.abs(user.diffAccount).toLocaleString()}원 더 {Math.sign(user.diffAccount) > 0 ? "아끼고" : "쓰고"} 있어요
      </p>
    </div>
  );
}
