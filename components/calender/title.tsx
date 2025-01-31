"use client";

import { CalendarProperties } from "./calendar-properties";

export default function CalendarTitle() {
  const { monthNames, currentMonth, currentYear } = CalendarProperties();

  return (
    <div className="mb-0">
      <h1 className="text-xl  text-gray-800 font-bold">
        <span>{`${monthNames[currentMonth]} ${currentYear}`}</span>
      </h1>
    </div>
  );
}
