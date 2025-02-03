import { CalendarProvider } from "@/hooks/calender-context";
import Calender from "../calender/calender";
import PieChartSection from "./pidChartSection";

export default function CalenderPieChart() {
  return (
    <CalendarProvider>
      <Calender />
      <PieChartSection />
    </CalendarProvider>
  );
}
