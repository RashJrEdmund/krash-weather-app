import { getCurrentWeekDay } from "../utils";

const getWeatherToday = (weather_arr: Array<any>) => {
    const todaylist = []; // weather_arr.filter(({ dt_txt }) => new Date(dt_txt).toLocaleDateString('en-US', { weekday: "long" }) === new Date().toLocaleDateString('en-US', { weekday: "long" }));

    const restOfDaysList = [];

    for (const weather of weather_arr) {
        if (new Date(weather.dt_txt).toLocaleDateString('en-US', { weekday: "long" }) === new Date().toLocaleDateString('en-US', { weekday: "long" })) {
            todaylist.push(weather);
        } else {
            restOfDaysList.push(weather);
        }
    }

    // todaylist.splice(0, 3);

    // restOfDays.splice(0, 3);

    const today = {
        weatherlist: todaylist,
        end: todaylist.length
    }

    const restOfDays = {
        weatherlist: restOfDaysList,
        end: restOfDaysList.length,
    }

    return {
        today,
        restOfDays
    }
}

const getSortedDays = (array_days: any) => array_days.sort((a: any, z: any) => new Date(a) < new Date(z));

export const distributeWeather = (weather_arr: Array<any>) => {
    if (!weather_arr) return {};

    const NWP = 8; // NWP means number of weather objects per day. 8 for 8 weather forecasts per day.

    const { today, restOfDays } = getWeatherToday(weather_arr);

    const date = new Date(today.weatherlist[0].dt_txt);

    const firstDayInForecast = getCurrentWeekDay(date) // to get the first day in the forecast

    const _5_day_weather: { [x: string]: any[] } = {
        ["Today"]: today.weatherlist,
    };

    for (let i = 0; i < 5; i++) {
        const firstForADay = restOfDays.weatherlist[i * NWP]; // first weather is the first weather forecast on each day.

        const that_day = getCurrentWeekDay(new Date(firstForADay.dt_txt));

        _5_day_weather[that_day] = restOfDays.weatherlist.slice(i * NWP, i * NWP + NWP);
    }

    return {
        _5_day_weather,
        sorted_days: getSortedDays(Object.keys(_5_day_weather)) as Array<string>
    };
}
