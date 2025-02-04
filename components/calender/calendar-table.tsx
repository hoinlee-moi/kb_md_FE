"use client";

import { useEffect } from "react";
import { CalendarProperties } from "./calendar-properties";
import { cn } from "@/lib/utils";

export default function CalendarTable({
  events,
}: {
  events: GetMonthTransData[];
}) {
  const {
    dayNames,
    // currentYear,
    currentMonth,
    daysInMonth,
    startingBlankDays,
    endingBlankDays,
    isToday,
    renderDays,
  } = CalendarProperties();

  // const getEvents = (date: number) => {
  //   return events.filter(
  //     (e) =>
  //       new Date(e.eventStart).toDateString() ===
  //       new Date(currentYear, currentMonth, date).toDateString()
  //   );
  // };

  useEffect(() => {
    renderDays();
    //events 새로 받기
  }, [currentMonth]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow overflow-hidden">
      {/* Days of the week */}
      <div className="grid grid-cols-7 gap-px border-b border-gray-200 dark:border-gray-700/60">
        {dayNames.map((day) => {
          return (
            <div className="px-1 py-1.5" key={day}>
              <div className="text-gray-500 text-xs font-medium text-center lg:hidden">
                {day.substring(0, 3)}
              </div>
              <div className="text-gray-500 dark:text-gray-400 text-sm font-medium text-center hidden lg:block">
                {day}
              </div>
            </div>
          );
        })}
      </div>

      {/* Day cells */}
      <div className="grid grid-cols-7 gap-px bg-gray-200 dark:bg-gray-700/60">
        {/* Diagonal stripes pattern */}
        <svg className="sr-only">
          <defs>
            <pattern
              id="stripes"
              patternUnits="userSpaceOnUse"
              width="5"
              height="5"
              patternTransform="rotate(135)"
            >
              <line
                className="stroke-current text-gray-200 dark:text-gray-700 opacity-50"
                x1="0"
                y="0"
                x2="0"
                y2="5"
                strokeWidth="2"
              />
            </pattern>
          </defs>
        </svg>
        {/* Empty cells (previous month) */}
        {startingBlankDays.map((blankday) => {
          return (
            <div className="bg-gray-50 dark:bg-gray-800 h-14" key={blankday}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
              >
                <rect width="100%" height="100%" fill="url(#stripes)" />
              </svg>
            </div>
          );
        })}
        {/* Days of the current month */}
        {daysInMonth.map((day) => {
          return (
            <div
              className="relative bg-white dark:bg-gray-800 h-14 overflow-hidden"
              key={day}
            >
              <div className="h-full flex flex-col justify-between">
                <div className="text-[9px] px-[2px] mt-[5px] font-bold w-full flex flex-col justify-center">
                  {events.find((v) => Number(v.date) === day) && (
                    <span
                      className={cn("w-full text-blue-500", {
                        "text-warning":
                          Math.sign(
                            Number(
                              events.find((v) => Number(v.date) === day)
                                ?.totalAmount
                            )
                          ) > 0
                            ? false
                            : true,
                      })}
                    >
                      {Number(
                        events.find((v) => Number(v.date) === day)?.totalAmount
                      ).toLocaleString()}
                    </span>
                  )}
                  {/* <span className="w-full text-blue-500">{`3,245,600`}</span> */}
                  {/* <span className="w-full text-warning">- 132,456</span> */}
                </div>
                {/* Cell footer */}
                <div className="flex justify-between items-center p-0.5 sm:p-1.5">
                  {/* Day number */}
                  <button
                    className={`inline-flex ml-auto w-6 h-6 items-center justify-center text-xs sm:text-sm dark:text-gray-300 font-medium text-center rounded-full hover:bg-violet-100 dark:hover:bg-gray-600 ${
                      isToday(day) && "text-violet-500"
                    }`}
                  >
                    {day}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        {/* Empty cells (next month) */}
        {endingBlankDays.map((blankday) => {
          return (
            <div className="bg-gray-50 dark:bg-gray-800 h-14" key={blankday}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
              >
                <rect width="100%" height="100%" fill="url(#stripes)" />
              </svg>
            </div>
          );
        })}
      </div>
    </div>
  );
}
