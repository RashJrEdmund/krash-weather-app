"use client";

import React from "react";
import { API_KEY } from "../../../services/constants";
import Location from "./Location";
import StyledSearchBar from "./StyledSearchBar";
import { StyledSearchIcon } from "../../Icons";
import getData from "@/api/GetData";

type Props = {};
export default function SearchBar({}: Props) {
  const [data, setData] = React.useState<any>(null);
  const [searchVal, setSearchVal] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  const logText = (data: any) => {
    console.clear();
    console.log({ [`${data}`]: data });
  };

  const handleFetch = () => {
    if (!searchVal.trim()) return;

    setLoading(true);
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${searchVal}&limit=5&appid=${API_KEY}`;
    getData(url)
      .then((res) => setData(res))
      .finally(() => setLoading(false));
    logText(data);
  };

  React.useEffect(() => {
    const intId = setTimeout(() => {
      handleFetch();
    }, 1000);

    return () => clearInterval(intId);
  }, [searchVal]);

  console.log(data);

  return (
    <StyledSearchBar loading={loading}>
      <div className="search_bar">
        <StyledSearchIcon />
        <input
          type="text"
          placeholder="search location"
          onChange={({ target: { value } }) => setSearchVal(value)}
        />
      </div>

      {searchVal.trim() &&
        data?.map((location: any) => (
          <Location
            key={location.lat + "-" + location.lon}
            location={location}
          />
        ))}
    </StyledSearchBar>
  );
}
