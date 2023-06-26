"use client";

import { createContext, useContext, useState } from "react";

const AppContext = createContext({});

type Props = {
  children: React.ReactNode;
};

export const WeatherContextProvider = ({ children }: Props) => {
  const [state, setState] = useState<any>(null);

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

export const useWeatherContext = () => useContext(AppContext)
