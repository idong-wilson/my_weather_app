import { DateTime } from "luxon";

const API_KEY = `Your API Key`;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';


const getWeatherData = async (infoType, searchParams) => {
  const url = new URL(BASE_URL + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }

  const data = await response.json();
  return data;
};


// const getWeatherData = (infoType, searchParams) => {
//   const url = new URL(BASE_URL + infoType);
//   url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

//   return fetch(url).then((res) => res.json());
// };


const iconUrlFromCode = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`;

const formatToLocalTime = (secs, offset, format = "ccc. dd LLL, yyyy' | Time: 'hh:mm a") => DateTime.fromSeconds(secs + offset, { zone: "utc" }).toFormat(format);

const formatCurrent = (data) => {
  const { 
    coord: {lat, lon}, 
    main: {temp, feels_like, temp_min, temp_max, humidity}, name, 
    dt, 
    sys: {country,sunrise, sunset},
    timezone,
    weather,
    wind: {speed}, 
} = data;

const {main: details, icon} = weather[0];
const formattedLocalTime = formatToLocalTime(dt, timezone);

return {
  lat, 
  lon,
  temp, 
  feels_like, 
  temp_min, 
  temp_max, 
  humidity, 
  name, 
  country, 
  sunrise: formatToLocalTime(sunrise, timezone, "hh:mm a"), 
  sunset: formatToLocalTime(sunset, timezone, "hh:mm a"),
  speed,
  details,
  icon: iconUrlFromCode(icon),
  formattedLocalTime,
  dt,
  timezone,
};
};

const formatForecastWeather = (secs, offset, data) => {
  // hourly
  const hourly = data
    .filter((f) => f.dt > secs)
    .slice(0, 6)
    .map((f) => ({
      temp: f.main.temp.toFixed(),
      icon: iconUrlFromCode(f.weather[0].icon),
      title: formatToLocalTime(f.dt, offset, "hh:mm a"),
      date: f.dt_txt
  }));

  // daily
  const daily = data.filter((f) => f.dt_txt.slice(-8) === "00:00:00").map(f => ({
    temp: f.main.temp.toFixed(),
      icon: iconUrlFromCode(f.weather[0].icon),
      title: formatToLocalTime(f.dt, offset, "ccc"),
      date: f.dt_txt
  }))

  return { hourly, daily };
}; 

// const getFormattedWeatherData = async (searchParams) => {
//   const formattedCurrentWeather = await getWeatherData("weather", searchParams).then(formatCurrent);

//   const {dt, lat, lon, timezone} = formattedCurrentWeather;

//   const formattedForecastWeather = await getWeatherData('forecast', {lat, lon, units: searchParams.units}).then((d) => formatForecastWeather(dt, timezone, d.list))

//   return { ...formattedCurrentWeather, ...formattedForecastWeather };
// };

const getFormattedWeatherData = async (searchParams) => {
  try {
    const formattedCurrentWeather = await getWeatherData("weather", searchParams).then(formatCurrent);

    const { dt, lat, lon, timezone } = formattedCurrentWeather;

    const formattedForecastWeather = await getWeatherData('forecast', { lat, lon, units: searchParams.units })
      .then((d) => formatForecastWeather(dt, timezone, d.list));

    return { ...formattedCurrentWeather, ...formattedForecastWeather };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null; // Return null or an appropriate default value on error
  }
};


export default getFormattedWeatherData

