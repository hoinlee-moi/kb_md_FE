import CalendarNavigation from "./calendar-navigation";
import CalendarTable from "./calendar-table";
import CalendarTitle from "./title";

export default function Calender() {
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

        <CalendarTable events={events} />
      </div>
    </>
  );
}

const events = [
  {
    eventStart: new Date(
      new Date().getFullYear(),
      new Date().getMonth() - 1,
      8,
      3
    ),
    eventEnd: new Date(
      new Date().getFullYear(),
      new Date().getMonth() - 1,
      8,
      7
    ),
    eventName: "⛱️ Relax for 2 at Marienbad",
    eventColor: "indigo",
  },
];
