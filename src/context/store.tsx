"use client"

import { createContext, useContext, useState, useEffect } from "react";
import getWeatherData, { getCurrentWeather } from "@/services/weather/weather.api";
import { getDefaultGeoLocation } from "@/services/location";
import useAlert from "@/hooks/UseAlert";
import { useParams } from "next/navigation";

interface IProps {
    children: React.ReactNode,
}

interface IweatherForecast {
    [x: string]: any[]
}

interface Ilocation {
    id: string,
    location: string,
    country: string,
    population: string,
    sunrise: string,
    sunset: string,
    timezone: string,
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

    currentWeather: any,
    setCurrentWeather: React.Dispatch<React.SetStateAction<any>>,
    location: Ilocation | null,

    todaysWeather: Array<any>,
    setTodaysWeather: React.Dispatch<React.SetStateAction<Array<any>>>,

    showMenu: IShowMenuType,
    setShowMenu: React.Dispatch<React.SetStateAction<IShowMenuType>>,

    showOverlay: boolean,
    setShowOverlay: React.Dispatch<React.SetStateAction<boolean>>,

    currentDay: string,
    setCurrentDAy: React.Dispatch<React.SetStateAction<string>>,

    currentTime: string,
    setCurrentTime: React.Dispatch<React.SetStateAction<string>>,

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
    const [currentWeather, setCurrentWeather] = useState<any>(null);  // the users current weather. not a forecast

    const [showOverlay, setShowOverlay] = useState<boolean>(false);
    const [currentTime, setCurrentTime] = useState<string>("Hs:Mm:Ss"); // for the current time display at the bottom right corner of the main display.
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

                setLocation({
                    id: loc?.id,
                    location: loc?.name,
                    country: loc?.country,
                    population: loc?.population,
                    sunrise: loc?.sunrise,
                    sunset: loc?.sunset,
                    timezone: loc?.timezone,
                });

                setCurrentWeather(_5_day_weather["Today"][0]);
            })
            .catch(console.error);
    }

    const updateStatesAndCurrentLocation = async (lat: number, lon: number) => {
        // const res = await getCurrentWeather(lat, lon);

        // console.log({res})

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
            setCurrentWeather(weatherForeCast[currentDay][0]); // whenever the day changes, sets current weather to first hour on that day.
        }
    }, [currentDay]);

    // useEffect(() => {
    //     console.log({
    //         _5_days,
    //         currentWeather,
    //         currentDay,
    //         weatherForeCast,
    //         todaysWeather,
    //         location,
    //     })
    // }, [_5_days,
    //     currentWeather,
    //     currentDay,
    //     weatherForeCast,
    //     todaysWeather,
    //     location,
    // ]);

    return <AppContext.Provider value={{
        _5_days,
        set5Days,

        currentWeather,
        setCurrentWeather,

        location,

        weatherForeCast,
        setWeatherForeCast,

        todaysWeather,
        setTodaysWeather,

        showMenu,
        setShowMenu,

        showOverlay,
        setShowOverlay,

        currentDay,
        setCurrentDAy,

        currentTime,
        setCurrentTime,

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
