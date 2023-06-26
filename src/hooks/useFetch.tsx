"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { FetchObjType, UseFetchReturnType } from "@/types";

const useFetch: (urlData: FetchObjType) => UseFetchReturnType = ({
  url,
  debounceTime,
}) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const getData = () => {
    (url &&
      axios
        .get(url)
        .then((res) => console.log(res))
        .catch(() => setError(true))
        .finally(() => setLoading(false))) ||
      console.log("loading...");
  };

  useEffect(() => {
    setLoading(true);
    const IntId = setTimeout(() => {
      getData();
    }, debounceTime || 0);

    return () => clearTimeout(IntId);
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
