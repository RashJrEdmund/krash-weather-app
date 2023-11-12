"use client";

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

export {
  logText,
  getCurrentDate,
  getCurrentWeekDay,
  removeSecondsFromTime,
}
