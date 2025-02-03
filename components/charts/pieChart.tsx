"use client";

import { Chart } from "chart.js/auto";
import { ChartData } from "chart.js";
import { useEffect, useRef } from "react";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ChartDataLabels);
type PropsType = {
  data: ChartData;
};

export default function PieChart({ data }: PropsType) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = canvasRef.current;
    if (!ctx) return;
    const newChart = new Chart(ctx, {
      type: "pie",
      data: data,
      options: {
        layout: {
          padding: {
            top: 8,
            bottom: 8,
            left: 34,
            right: 34,
          },
        },
        animation: { duration: 200 },
        plugins: {
          datalabels: {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            formatter: (value: number, context: any) => {
              // 현재 데이터셋의 모든 값 배열 가져오기
              const dataArr = context.chart.data.datasets[0].data as number[];
              // 전체 합계 계산
              const sum = dataArr.reduce((acc, cur) => acc + cur, 0);
              // 백분율 계산 (소수점 둘째 자리까지)
              const percentage = ((value / sum) * 100).toFixed() + "%";
              return percentage;
            },
            color: "#000",
            anchor: "end",
            align: "end",
          },
          legend: {
            position: "bottom",
            align: "center",
            maxWidth: 100,
            labels: {
              boxWidth: 5,
              boxHeight: 5,
              padding: 2,
              textAlign: "left",
            },
          },
        },
      },
    });

    return () => newChart.destroy();
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}
