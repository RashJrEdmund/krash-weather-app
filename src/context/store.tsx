"use client"

import { createContext, useContext, useState, useEffect } from "react";
import getWeatherData, { getCurrentWeather } from "@/services/weather/weather.api";
import { getDefaultGeoLocation } from "@/services/location";
import useAlert from "@/hooks/UseAlert";

interface IProps {
    children: React.ReactNode,
}

interface IcurrentWeather {
    location: string,
    temp: string,
    description: string,
    wind_speed: string,
    pressure: string,
    humidity: string,
    icon: string,
}

interface IweatherForecast {
    [x: string]: any[]
}

interface Ilocation {
    name: string,
}

interface IShowMenuType {
    left: boolean;
    right: boolean;
};

interface ICustomAlert {
    AlertComponent: JSX.Element,
    displayAlert: (msg: string) => void,
    alertMsg: {
        message: string,
        show: boolean,
    }
}

interface IAppContext {
    _5_days: Array<string>
    set5Days: React.Dispatch<React.SetStateAction<Array<string>>>,

    weatherForeCast: IweatherForecast | null,
    setWeatherForeCast: React.Dispatch<React.SetStateAction<IweatherForecast | null>>

    currentWeather: IcurrentWeather | null,
    location: Ilocation | null,

    currentDay: string,
    setCurrentDAy: React.Dispatch<React.SetStateAction<string>>

    todaysWeather: Array<any>,
    setTodaysWeather: React.Dispatch<React.SetStateAction<Array<any>>>,

    showMenu: IShowMenuType,
    setShowMenu: React.Dispatch<React.SetStateAction<IShowMenuType>>,

    showOverlay: boolean,
    setShowOverlay: React.Dispatch<React.SetStateAction<boolean>>,

    time: string,
    setTime: React.Dispatch<React.SetStateAction<string>>,

    day: string,
    setDay: React.Dispatch<React.SetStateAction<string>>,

    error: boolean,
    customAlert: ICustomAlert,

    updateStatesAndCurrentLocation: (lat: number, lon: number) => Promise<void>
}

const AppContext = createContext<IAppContext | null>(null);

const WeatherContextProvider = ({ children }: IProps) => {
    const [_5_days, set5Days] = useState<Array<string>>(["Today", "Day 2", "Day 3", "Day 4", "Day 5"]);
    const [weatherForeCast, setWeatherForeCast] = useState<IweatherForecast | null>(null);
    const [currentDay, setCurrentDAy] = useState<string>("Today"); // is equivalent to new Date().toLocaleDateString('en-US', { weekday: "long" });
    const [todaysWeather, setTodaysWeather] = useState<Array<any>>([]);
    const [location, setLocation] = useState<Ilocation | null>(null);
    const [currentWeather, setCurrentWeather] = useState<IcurrentWeather | null>(null);  // the users current weather. not a forecast

    const [error, setError] = useState<boolean>(false);
    const [showOverlay, setShowOverlay] = useState<boolean>(false);
    const [time, setTime] = useState<string>("Hs:Mm:Ss");
    const [day, setDay] = useState<string>("Today");
    const [showMenu, setShowMenu] = useState<IShowMenuType>({
        left: false,
        right: false,
    });

    const { AlertComponent, displayAlert, alertMsg } = useAlert();
    const customAlert = { AlertComponent, displayAlert, alertMsg } as any as ICustomAlert;

    const updateWeatherStates = (lat: number, lon: number) => {
        getWeatherData(lat, lon)
            .then((res) => {
                const { _5_day_weather, sorted_days, location: loc } = res; // loc is an alias to location to avoid conflicting with location from context

                if (!(_5_day_weather && sorted_days && loc)) return null;

                setWeatherForeCast(_5_day_weather as IweatherForecast);
                setTodaysWeather(_5_day_weather["Today"]);
                set5Days([...sorted_days]);
                setLocation(loc);
            })
            .catch(console.error);
    }

    const updateStatesAndCurrentLocation = async (lat: number, lon: number) => {
        const res = await getCurrentWeather(lat, lon);

        const res_data: IcurrentWeather = {
            location: res.name,
            temp: res.main.temp,
            description: res.weather[0].description,
            wind_speed: res.wind.speed,
            pressure: res.main.pressure,
            humidity: res.main.humidity,
            icon: res.weather[0].icon,
        }

        setCurrentWeather(res_data);

        updateWeatherStates(lat, lon);
    }

    useEffect(() => {
        (async () => {
            const location = await getDefaultGeoLocation(); // get's user's geo location on start.

            if (!location) return;

            const { latitude: lat, longitude: lon } = location;

            updateStatesAndCurrentLocation(lat, lon);
        })();
    }, []);

    useEffect(() => {
        if (currentDay && weatherForeCast) {
            setTodaysWeather(weatherForeCast[currentDay]);
        }
    }, [currentDay]);

    useEffect(() => {
        console.log({
            _5_days,
            currentWeather,
            currentDay,
            weatherForeCast,
            todaysWeather
        })
    }, [_5_days,
        currentWeather,
        currentDay,
        weatherForeCast,
        todaysWeather
    ]);

    return <AppContext.Provider value={{
        _5_days,
        set5Days,

        currentWeather,
        location,

        currentDay,
        setCurrentDAy,

        weatherForeCast,
        setWeatherForeCast,

        todaysWeather,
        setTodaysWeather,

        showMenu,
        setShowMenu,

        showOverlay,
        setShowOverlay,

        time,
        setTime,

        day,
        setDay,

        error,

        customAlert,

        updateStatesAndCurrentLocation,
    }}>
        {children}
    </AppContext.Provider>
}

const useWeatherContext = () => useContext(AppContext) as any as IAppContext;

export {
    WeatherContextProvider,
    useWeatherContext
}
