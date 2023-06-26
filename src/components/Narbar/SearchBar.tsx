"use client";

import useFetch from "@/hooks/useFetch";
import React from "react";
import { API_KEY } from "../../services/constants";
import { FetchObjType } from "@/types";
import Location from "./Location";

type Props = {};
export default function SearchBar({}: Props) {
  const [urlData, setUrlData] = React.useState<FetchObjType>({
    url: "",
    debounceTime: 1300,
  });

  const { data, loading, error } = useFetch(urlData);

  const logText = (data: any) => {
    console.clear();
    console.log({ [`${data}`]: data });
  };

  const handleFetch = ({ target: { value } }: any) => {
    setUrlData((prev) => ({
      ...prev,
      url: `http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${API_KEY}`,
    }));
    logText(data);
  };

  console.log(data);

  return (
    <div className="searchbar">
      <div>
        Search bar
        <input
          type="text"
          placeholder="search location"
          onChange={handleFetch}
        />
      </div>
      {data?.map((location: any) => (
        <Location key={location.lat + "-" + location.lon} location={location} />
      ))}
    </div>
  );
}
