import { CalendarProvider } from "@/hooks/calender-context";
import Calender from "../calender/calender";
import PieChart from "../charts/pieChart";

export default function CalenderPieChart() {
  return (
    <CalendarProvider>
      <Calender />
      <div className="flex" data-aos="fade-up" data-aos-duration="1000">
        <div className="w-1/2">
          <PieChart data={chartData} />
        </div>
        <div className="w-1/2">
          <PieChart data={chartData} />
        </div>
      </div>
    </CalendarProvider>
  );
}

const chartData = {
  labels: ["저축", "습관", "소비", "기타"],
  datasets: [
    {
      label: "Sessions By Device",
      data: [12, 13, 10, 65],
      backgroundColor: ["#3EC972", "#F7CD4C", "#67BFFF", "#8470FF"],
      hoverBackgroundColor: ["#3EC972", "#F0BB33", "#56B1F3", "#755FF8"],
      borderWidth: 0,
    },
  ],
};
