"use client";

import { type ReadonlyURLSearchParams } from "next/navigation";
import { SEARCH_PARAMS } from "./constants";

const logText = (data: any) => {
  const { clear, log } = console;
  clear();
  log({ [`${data}`]: data });
};

const getCurrentDate = (date: Date) => {
  // example return: 'Saturday, 1 July 2023'
  const currentDate = date
    .toLocaleString(undefined, {
      dateStyle: "full",
    })

  return currentDate;
};

const getCurrentWeekDay = (date: Date) => {
  const weekDay = date.toLocaleDateString('en-US', { weekday: "long" });

  return weekDay;
}

const removeSecondsFromTime = (dt_txt: string) => {
  const time_array: any = new Date(dt_txt).toLocaleTimeString().split(":") || [];
  const period = time_array.at(-1).slice(-2); // returns either AM or PM
  time_array[time_array.length - 1] = period;

  return time_array.join(":");
}

/**
 * receive an instance of NextJs' useSearchParams hook, and returns an instance the URLSearchParams JS API
 * reads allowed search params from an array SEARCH_PARAMS in the './constants.ts' file
 * and ensures only those params are read and used.
 * @param ReadonlyURLSearchParams
 * @returns URLSearchParams
*/
const getAndFormSearchQuery = (searchParams: ReadonlyURLSearchParams): URLSearchParams => {
  const searchQuery = new URLSearchParams();

  for (const q of SEARCH_PARAMS) {
    const value = searchParams.get(q);
    if (value) {
      searchQuery.set(q, value);
    }
  }

  return searchQuery;
}

export {
  logText,
  getCurrentDate,
  getCurrentWeekDay,
  removeSecondsFromTime,
  getAndFormSearchQuery,
}
