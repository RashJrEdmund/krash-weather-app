"use client";

import { useState, useEffect } from "react";
import { API_KEY } from "../../../services/constants";
import Location from "./Location";
import StyledSearchBar from "./StyledSearchBar";
import { SearchIcon } from "../../atoms/Icons";
import getData from "@/api/GetData";
import { useWeatherContext } from "@/context/store";
import { Overlay } from "@/components/atoms/Atoms";
import { useRouter, useSearchParams } from "next/navigation";
import { getAndFormSearchQuery } from "@/services/utils";

interface Props { };
export default function SearchBar({ }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [locationData, setLocationData] = useState<any>(null);
  const [searchVal, setSearchVal] = useState<string>(searchParams.get('search') || '');
  const [loading, setLoading] = useState<boolean>(false);


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

  useEffect(() => {
    const searchQuery = getAndFormSearchQuery(searchParams);

    searchQuery.set('search', searchVal);

    if (!searchVal.trim()) searchQuery.delete('search');
    
    router.replace('?' + searchQuery.toString());

    const intId = setTimeout(() => {
      searchVal.trim() && setShowOverlay(true); // to ensure that there actually is avalue being fetched
      handleFetch();
    }, 900);

    return () => clearInterval(intId);
  }, [searchVal]);

  useEffect(() => {
    // console.clear();
    // console.log(searchParams.toString())
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
