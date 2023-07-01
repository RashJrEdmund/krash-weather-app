"use client";

import {
  useParams,
  useRouter,
  usePathname,
  useSearchParams,
} from "next/navigation";
import React from "react";

const WeatherAPPGaurd = (Component: any) => {
  return function Gaurd(props: any) {
    const params = useParams();
    const router = useRouter();
    const pathName = usePathname()

    React.useEffect(() => {
      // console.clear()
      // console.log(params, router, pathName);
      if(!pathName.split('/').includes('weather')) router.replace('/krashweather');
    }, [pathName]);

    return <Component {...props} />;
  };
};

export default WeatherAPPGaurd;
