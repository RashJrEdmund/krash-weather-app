export const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_APIKEY || "";

export const GEOLOCATION_API_KEY = process.env.NEXT_PUBLIC_GEOLOCATION_API_KEY || "";

export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "";

export const DAYS = ["day_1", "day_2", "day_3", "day_4", "day_5"];

export const SEARCH_PARAMS = ['search', 'day', 'time'] as const;

export const APP_VERSION = process.env.APP_VERSION || "";
