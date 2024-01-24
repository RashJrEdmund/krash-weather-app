"use client";

import React from "react";
import { API_KEY } from "../../../services/constants";
import Location from "./Location";
import StyledSearchBar from "./StyledSearchBar";
import { SearchIcon } from "../../atoms/Icons";
import getData from "@/api/GetData";
import { useWeatherContext } from "@/context/store";
import { Overlay } from "@/components/atoms/Atoms";

interface Props {};
export default function SearchBar({}: Props) {
  const [locationData, setLocationData] = React.useState<any>(null);
  const [searchVal, setSearchVal] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  const { showOverlay, setShowOverlay } = useWeatherContext();

  const handleInput = ({ target: { value } }: any) => {
    if (!value.trim()) setLoading(false);
    setSearchVal(value);
    setShowOverlay(false);
  };

  const handleFetch = () => {
    if (!searchVal.trim()) return;

    setLoading(true);
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${searchVal}&limit=5&appid=${API_KEY}`;
    getData(url)
      .then((res) => setLocationData(res))
      .finally(() => setLoading(false));
  };

  // using a debounce search. waiting 900ms

  React.useEffect(() => {
    const intId = setTimeout(() => {
      searchVal.trim() && setShowOverlay(true); // to ensure that there actually is avalue being fetched
      handleFetch();
    }, 900);

    return () => clearInterval(intId);
  }, [searchVal]);

  React.useEffect(() => {
    console.clear();
  }, [locationData]);

  return (
    <>
      {showOverlay && (
        <Overlay index={2} action={() => setShowOverlay(false)} />
      )}

      <StyledSearchBar fetching={loading}>
        <div className="search_bar">
          <input
            type="text"
            placeholder="search location"
            value={searchVal}
            onChange={handleInput}
            onFocus={() => {
              if (searchVal.trim()) setShowOverlay(true);
            }}
          />

          <SearchIcon />
        </div>

        <div className="show_locations">
          {searchVal.trim() &&
            showOverlay &&
            locationData?.map((location: any) => (
              <Location
                key={location.lat + "-" + location.lon}
                location={location}
              />
            ))}
        </div>
      </StyledSearchBar>
    </>
  );
}
