import { GEOLOCATION_API_KEY } from "./constants";

const getDefaultGeoLocation: () => Promise<{
    latitude: number,
    longitude: number,
    city: string,
    ip: string,
    country_name: string,
}> = async () => {
    const url = `https://api.ipgeolocation.io/ipgeo?apiKey=${GEOLOCATION_API_KEY}`;
    return fetch(url).then(res => res.json());
}

export {
    getDefaultGeoLocation,
}
