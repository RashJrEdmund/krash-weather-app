"use client";

import { useState, useEffect } from "react";
import axios from "axios";

export interface FetchObjType {
  url: string;
  debounceTime?: number;
}

export interface UseFetchReturnType {
  loading: boolean;
  data: any;
  error: boolean;
}

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
        .then(({ data }) => setData(data))
        .catch(() => setError(true))
        .finally(() => setLoading(false))) ||
      console.log("NO_URL_DETECTED");
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
