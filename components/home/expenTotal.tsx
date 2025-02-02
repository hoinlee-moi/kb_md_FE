"use client";

import { getMonthlyIncomeAndExpense, getTotalAccountBalance } from "@/actions/api";
import { useUserId } from "@/hooks/userId-context";
import { useEffect, useState } from "react";

export default function ExpenTotal() {
  const { userId } = useUserId();
  const [data, setData] = useState({ monthSum: "215", total: "32", lastCurSum: 1355 });
  const date = new Date();
  const month = date.getMonth() + 1;

  useEffect(() => {
    (async () => {
      try {
        const lastMonth = await getMonthlyIncomeAndExpense(userId, String(month - 1));
        const curMonth = await getMonthlyIncomeAndExpense(userId, String(month));
        const totalAcc = await getTotalAccountBalance(userId);

        setData({
          monthSum: String(curMonth.totalSum),
          total: String(totalAcc.userBalance),
          lastCurSum: lastMonth.totalSum - curMonth.totalSum,
        });
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="text-center w-full">
      <div className="flex items-center justify-between ">
        <div className="text-center w-1/2">
          <p>{month}월 수입 지출 합계</p>
          <p className="font-semibold text-xl text-warning">{data.monthSum}</p>
        </div>
        <div className="text-center w-1/2">
          <p>계좌 총 잔액</p>
          <p className="font-semibold text-xl">{data.total}</p>
        </div>
      </div>
      <p className="mt-2">
        지난달 보다 {Math.abs(data.lastCurSum)}원 더 {Math.sign(data.lastCurSum) > 0 ? "아끼고" : "쓰고"} 있어요
      </p>
    </div>
  );
}
