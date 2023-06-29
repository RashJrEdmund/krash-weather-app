"use client";

import { useParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";

type Props = {};

export default function Data({}: Props) {
  const router = useRouter();
  const params = useParams();
  useEffect(() => {
    console.log(router, params);
  }, []);

  return <div>Data {params?.day}</div>;
}
