"use client";

export const logText = (data: any) => {
  const { clear, log } = console;
  clear();
  log({ [`${data}`]: data });
};

export const getSessionStorage = (key: string) => {
  const session = sessionStorage.getItem(key);
  if (session) return JSON.parse(session);
  return undefined;
};

export const setSessionStorage = (key: string, value: any) =>
  sessionStorage.setItem(key, JSON.stringify(value));
