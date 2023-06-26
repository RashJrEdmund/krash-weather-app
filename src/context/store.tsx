"use client";

import useFetch from "@/hooks/useFetch";
import { createContext, useContext, useState } from "react";

const AppContext = createContext({});

type Props = {
  children: React.ReactNode;
};

const urlData = {
  url: "",
  debounceTime: 1300,
};

export const WeatherContextProvider = ({ children }: Props) => {
  const [state, setState] = useState<any>(null);

  const { data, loading, error } = useFetch(urlData);

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

export const useWeatherContext = () => useContext(AppContext);
