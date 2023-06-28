"use client";

import axios from "axios";

const getData: (url: string) => Promise<any> = async (url: string) => {
  return axios
    .get(url)
    .then(({ data }) => data)
    .catch((err) => new Error(err));
};

export default getData;
