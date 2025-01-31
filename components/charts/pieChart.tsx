"use client";

import { Chart } from "chart.js/auto";
import { ChartData } from "chart.js";
import { useEffect, useRef } from "react";

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
            top: 4,
            bottom: 4,
            left: 24,
            right: 24,
          },
        },
        animation: { duration: 200 },
        plugins: { legend: {} },
      },
    });

    return () => newChart.destroy();
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}
