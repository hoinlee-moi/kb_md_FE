"use client";
import { useEffect, useState } from "react";
import { CalendarProperties } from "../calender/calendar-properties";
import PieChart from "../charts/pieChart";
import {
  getCategoryExpenseChart,
  getMonthlyIncomeExpenseChart,
} from "@/actions/api";

export default function PieChartSection() {
  const { currentMonth } = CalendarProperties();
  const [totData, setTotData] = useState<ChartData>();
  const [cateData, setCateData] = useState<ChartData>();

  useEffect(() => {
    (async () => {
      try {
        const totRes = await getMonthlyIncomeExpenseChart(currentMonth);
        const cateRes = await getCategoryExpenseChart(currentMonth);
        console.log("curMonth>>>", currentMonth);
        console.log("piechart>>>", totRes, cateRes);
        setTotData({
          labels: ["지출", "수입"],
          datasets: [
            {
              label: "",
              data: [totRes.totalExpense, totRes.totalIncome],
              backgroundColor: ["#ffbc00 ", "#F7CD4C"],
              hoverBackgroundColor: ["#ffbc00 ", "#F0BB33"],
              borderWidth: 0,
            },
          ],
        });
        setCateData({
          labels: cateRes.map((v) => v.category),
          datasets: [
            {
              label: "",
              data: cateRes.map((v) => v.totalAmount),
              backgroundColor: ["#ffbc00 ", "#F7CD4C", "#67BFFF", "#8470FF"],
              hoverBackgroundColor: [
                "#ffbc00 ",
                "#F0BB33",
                "#56B1F3",
                "#755FF8",
              ],
              borderWidth: 0,
            },
          ],
        });
      } catch (error) {
        console.error(error);
      }
    })();
  }, [currentMonth]);

  return (
    <>
      {totData && cateData && (
        <div className="flex" data-aos="fade-up" data-aos-duration="1000">
          <div className="w-1/2">
            <PieChart data={totData} />
          </div>
          <div className="w-1/2">
            <PieChart data={cateData} />
          </div>
        </div>
      )}
    </>
  );
}

// const CHARTDUMMY = {
//   labels: ["저축", "습관", "소비", "기타"],
//   datasets: [
//     {
//       label: "",
//       data: [12, 13, 10, 65],
//       backgroundColor: ["#3EC972", "#F7CD4C", "#67BFFF", "#8470FF"],
//       hoverBackgroundColor: ["#3EC972", "#F0BB33", "#56B1F3", "#755FF8"],
//       borderWidth: 0,
//     },
//   ],
// };
