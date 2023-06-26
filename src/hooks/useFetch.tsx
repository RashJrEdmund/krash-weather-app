import { useState, useEffect } from "react";
import axios from "axios";

interface HookReturnType {
  loading: boolean;
  data: any;
  error: boolean;
}

interface FetchProp {
  url: string;
  debounceTime?: number;
}

const useFetch: (urlData: FetchProp) => HookReturnType = ({
  url,
  debounceTime,
}) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const IntId = setTimeout(() => {
      axios
        .get(url)
        .then(setData)
        .catch(() => setError(true))
        .finally(() => setLoading(false));
    }, debounceTime || 0);

    return () => clearTimeout(IntId);
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
