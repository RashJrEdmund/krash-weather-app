import { createContext, useContext, useState, useEffect } from "react";
// import { getDefaultLocation } from "../Services/utils";
import getWeatherData, { getCurrentWeather } from "@/services/weather/weather.api";
import { getDefaultLocation } from "@/services/utils";

interface IAPPCONTEXTPROVIDER {
    children: React.ReactNode,
}

interface IcurrentWeather {
    temp: string,
    description: string,
    wind_speed: string,
    pressure: string,
    humidity: string,
}

interface IweatherForecast {
    [x: string] : any[]
}

interface Ilocation {
    name: string,
}

interface IAppContext {
    days: Array<string>
    setDays: React.Dispatch<React.SetStateAction<Array<string>>>,

    weatherForeCast: IweatherForecast | null,
    setWeatherForeCast: React.Dispatch<React.SetStateAction<IweatherForecast | null>>

    currentWeather: IcurrentWeather | null,
    location: Ilocation | null,

    currentDay: string,
    setCurrentDAy: React.Dispatch<React.SetStateAction<string>>

    todaysWeather: Array<any>,
    setTodaysWeather: React.Dispatch<React.SetStateAction<Array<any>>>,

    updateStatesAndCurrentLocation: (lat: number, lon: number) => Promise<void>
}

const AppContext = createContext<IAppContext | null>(null);

const AppContextProvider = ({ children }: IAPPCONTEXTPROVIDER) => {
    const [days, setDays] = useState<Array<string>>(['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY']);
    const [weatherForeCast, setWeatherForeCast] = useState<IweatherForecast | null>(null);
    const [currentDay, setCurrentDAy] = useState<string>(""); // is equivalent to new Date().toLocaleDateString('en-US', { weekday: "long" });
    const [todaysWeather, setTodaysWeather] = useState<Array<any>>([]);
    const [location, setLocation] = useState<Ilocation | null>(null);
    const [currentWeather, setCurrentWeather] = useState<IcurrentWeather | null>(null);  // the users current weather. not a forecast

    const updateWeatherStates = (lat: number, lon: number) => {
        getWeatherData(lat, lon)
            .then((res) => {
                const { _5_day_weather, sorted_days, today, location: loc } = res; // loc is an alias to location to avoid conflicting with location from context
                if (!_5_day_weather || !sorted_days || !today || !location) return null;

                setWeatherForeCast(_5_day_weather as IweatherForecast);
                setTodaysWeather(_5_day_weather[today]);
                setDays([...sorted_days]);
                setCurrentDAy(today);
                setLocation(loc);
            })
            .catch(console.log);
    }

    const updateStatesAndCurrentLocation = async (lat: number, lon: number) => {
        const res = await getCurrentWeather(lat, lon);

        console.clear();
        console.log("res", res)

        const res_data: IcurrentWeather = {
            temp: res.main.temp,
            description: res.weather[0].description,
            wind_speed: res.wind.speed,
            pressure: res.main.pressure,
            humidity: res.main.humidity,
        }

        setCurrentWeather(res_data);

        updateWeatherStates(lat, lon);
    }

    const getLocation = async () => {
        const location = await getDefaultLocation(); // get's user's location.

        // console.log("location", location); // see ipgeolocation response.
        const lat = location.latitude;
        const lon = location.longitude;

        updateStatesAndCurrentLocation(lat, lon);
    };

    useEffect(() => {
        getLocation();
    }, []);

    useEffect(() => {
        if (currentDay && weatherForeCast) {
            setTodaysWeather(weatherForeCast[currentDay]);
        }
    }, [currentDay]);

    return <AppContext.Provider value={{
        days,
        setDays,

        currentWeather,
        location,

        currentDay,
        setCurrentDAy,

        weatherForeCast,
        setWeatherForeCast,

        todaysWeather,
        setTodaysWeather,

        updateStatesAndCurrentLocation,
    }}>
        {children}
    </AppContext.Provider>
}

const useAppContext = () => useContext(AppContext);

export {
    AppContextProvider,
    useAppContext
}