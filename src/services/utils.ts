"use client";

export const logText = (data: any) => {
  const { clear, log } = console;
  clear();
  log({ [`${data}`]: data });
};

export const getDay = (date: any) => {
  // date looks like : "2023-07-01 09:00:00"
  // date.toLocaleString(undefined, {....}) looks like : 'Saturday, 1 July 2023'
  // now you get why i'm spliting at new Date().getFullYear() and taking the first val

  const year: any = new Date().getFullYear();

  const res = date
    .toLocaleString(undefined, {
      dateStyle: "full",
    })
    .split(year)
    .shift();

  const today = new Date()
    .toLocaleString(undefined, {
      dateStyle: "full",
    })
    .split(year)
    .shift();

  return res === today ? "Today" : res;
};
