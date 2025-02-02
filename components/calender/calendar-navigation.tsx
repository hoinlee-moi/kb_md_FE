"use client";

import { useEffect } from "react";
import { CalendarProperties } from "./calendar-properties";

export interface Event {
  eventStart: Date;
  eventEnd: Date | null;
  eventName: string;
  eventColor: string;
}

export default function CalendarNavigation() {
  const { currentMonth, setCurrentMonth, renderDays } = CalendarProperties();

  useEffect(() => {}, [currentMonth]);

  return (
    <>
      {/* Previous month button */}
      <button
        className="btn h-[25px] w-[25px] bg-white  border-gray-200  hover:border-gray-300  text-gray-500  hover:text-gray-600  disabled:border-gray-200  disabled:bg-gray-100  disabled:text-gray-400  disabled:cursor-not-allowed"
        disabled={currentMonth === 0}
        onClick={() => {
          setCurrentMonth(currentMonth - 1);
          renderDays();
        }}
      >
        <wbr />
        <svg
          className="fill-current text-gray-400 dark:text-gray-500"
          width="14"
          height="14"
          // viewBox="0 0 14 14"
        >
          <path d="M9.4 13.4l1.4-1.4-4-4 4-4-1.4-1.4L4 8z" />
        </svg>
      </button>

      {/* Next month button */}
      <button
        className="btn h-[25px] w-[25px] bg-white border-gray-200 hover:border-gray-300  text-gray-500 hover:text-gray-600  disabled:border-gray-200 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
        disabled={currentMonth === 11}
        onClick={() => {
          setCurrentMonth(currentMonth + 1);
          renderDays();
        }}
      >
        <wbr />
        <svg className="fill-current text-gray-400 dark:text-gray-500" width="14" height="14" viewBox="0 0 14 14">
          <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
        </svg>
      </button>
    </>
  );
}
