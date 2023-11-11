import { API_KEY } from "../constants";
import { distributeWeather } from "./functions";

const getWeatherFromLocation = async (lat: number | string, lon: number | string) => {
    try {
        const weather_url = `http://api.openweathermap.org/data/2.5/forecast?units=metric&&lat=${lat}&lon=${lon}&appid=${API_KEY}`;
        return fetch(weather_url).then(res => res.json());
    } catch (error) {
        console.log(error);
    }
}

const getWeatherData = async (lat: number | string, lon: number | number) => {
    return getWeatherFromLocation(lat, lon)
        .then(weather => {
            const { _5_day_weather, sorted_days } = distributeWeather(weather.list);
            const today = new Date().toLocaleDateString('en-US', { weekday: "long" });

            return {
                _5_day_weather,
                sorted_days,
                today,
                location: weather.city as any
            }
        });
}

const getCurrentWeather = async (lat: number | string, lon: number | string) => {
    try {
        const search_url = `https://api.openweathermap.org/data/2.5/weather?units=metric&&lat=${lat}&lon=${lon}&appid=${API_KEY}`
        return fetch(search_url).then(res => res.json());
    } catch (error) {
        console.log(error);
    }
}

export {
    getWeatherData,
    getCurrentWeather
}

export default getWeatherData;
