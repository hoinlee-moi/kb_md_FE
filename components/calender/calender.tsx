"use client";
import { useEffect, useState } from "react";
import CalendarNavigation from "./calendar-navigation";
import CalendarTable from "./calendar-table";
import CalendarTitle from "./title";
import { CalendarProperties } from "./calendar-properties";
import { getMonthlyTransactionData } from "@/actions/api";

export default function Calender() {
  const { currentMonth } = CalendarProperties();
  const [data, setData] = useState<GetMonthTransData[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await getMonthlyTransactionData(currentMonth + 1);
        if (res) {
          setData(
            res.map((v) => ({
              date: `${new Date(v.date).getDate()}`,
              totalAmount: v.totalAmount,
            }))
          );
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [currentMonth]);

  return (
    <>
      <div className="px-4 py-8 w-full max-w-[96rem] mx-auto">
        {/* Page header */}
        <div className="flex justify-between items-center mb-2 px-1">
          {/* Left: Title */}
          <CalendarTitle />

          {/* Right: Actions */}
          <div className="grid grid-flow-col justify-end gap-2">
            <CalendarNavigation />
          </div>
        </div>

        <CalendarTable events={data} />
      </div>
    </>
  );
}
