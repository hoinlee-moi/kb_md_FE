"use client";

import { useCalendarContext } from "@/hooks/calender-context";
import { useState } from "react";

export const CalendarProperties = () => {
  const monthNames: string[] = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];
  const dayNames: string[] = ["일", "월", "화", "수", "목", "금", "토"];
  const { today, currentMonth, setCurrentMonth, currentYear, setCurrentYear } =
    useCalendarContext();
  const [daysInMonth, setDaysInMonth] = useState<number[]>([]);
  const [startingBlankDays, setStartingBlankDays] = useState<number[]>([]);
  const [endingBlankDays, setEndingBlankDays] = useState<number[]>([]);

  const eventColor = (color: string): string => {
    switch (color) {
      case "sky":
        return "text-white bg-sky-500";
      case "red":
        return "text-white bg-red-500";
      default:
        return "";
    }
  };

  const isToday = (date: number): boolean => {
    const day = new Date(currentYear, currentMonth, date);
    return today.toDateString() === day.toDateString();
  };

  const renderDays = (): void => {
    const days = new Date(currentYear, currentMonth + 1, 0).getDate();

    // starting empty cells (previous month)
    const startingDayOfWeek: number = new Date(
      currentYear,
      currentMonth
    ).getDay();
    const startingBlankDaysArray: number[] = [];
    for (let i = 1; i <= startingDayOfWeek; i++) {
      startingBlankDaysArray.push(i);
    }

    // ending empty cells (next month)
    const endingDayOfWeek: number = new Date(
      currentYear,
      currentMonth + 1,
      0
    ).getDay();
    const endingBlankDaysArray: number[] = [];
    for (let i = 1; i < 7 - endingDayOfWeek; i++) {
      endingBlankDaysArray.push(i);
    }

    // current month cells
    const daysArray: number[] = [];
    for (let i = 1; i <= days; i++) {
      daysArray.push(i);
    }

    setStartingBlankDays(startingBlankDaysArray);
    setEndingBlankDays(endingBlankDaysArray);
    setDaysInMonth(daysArray);
  };

  return {
    today,
    monthNames,
    dayNames,
    currentMonth,
    setCurrentMonth,
    currentYear,
    setCurrentYear,
    daysInMonth,
    setDaysInMonth,
    startingBlankDays,
    setStartingBlankDays,
    endingBlankDays,
    setEndingBlankDays,
    eventColor,
    isToday,
    renderDays,
  };
};
