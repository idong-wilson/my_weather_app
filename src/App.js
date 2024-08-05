import React, { useEffect, useState } from 'react';
import Forecast from './components/Forecast';
import Location from './components/Location';
import SearchButtons from './components/SearchButtons';
import SearchInputs from './components/SearchInputs';
import TemperatureDetails from './components/TemperatureDetails';
import getFormattedWeatherData from './services/weatherService';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function capitalizeFLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}

const App = () => {
  const [query, setQuery] = useState({ q: 'new york' });
  const [units, setUnits] = useState('imperial');
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    const cityName = query.q ? query.q : 'current location';
    toast.info(`Fetching weather data for ${capitalizeFLetter(cityName)}`);

    await getFormattedWeatherData({ ...query, units }).then((data) => {
      toast.success(`Here is the weather data for ${data.name}, ${data.country}`);
      setWeather(data);
    });
  };

  useEffect(() => {
    getWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return 'from-cyan-600 to-blue-700';
    const threshold = units === 'imperial' ? 20 : 60;
    if (weather.temp <= threshold) return 'from-cyan-600 to-blue-700';
    return 'from-amber-800';
  };

  return (
    <div className={`mx-auto max-w-screen-lg mt-4 py-2 px-32 bg-gradient-to-bl shadow-xl shadow-gray-300 ${formatBackground()}`}>
      <SearchButtons setQuery={setQuery} />
      <SearchInputs setQuery={setQuery} setUnits={setUnits} />

      {weather && (
        <>
          <Location weather={weather} />
          <TemperatureDetails weather={weather} units={units} />
          <Forecast title="3 hour step forecast" data={weather.hourly} />
          <Forecast title="daily forecast" data={weather.daily} />
        </>
      )}

      <ToastContainer autoClose={2500} hideProgressBar theme="colored" />
    </div>
  );
};

export default App;






// import { useEffect, useState } from 'react';
// import Forecast from './components/Forecast';
// import Location from './components/Location';
// import SearchButtons from './components/SearchButtons';
// import SearchInputs from './components/SearchInputs';
// import TemperatureDetails from './components/TemperatureDetails';
// import getFormattedWeatherData from './services/weatherService';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function capitalizeFLetter(string) {
//   return string[0].toUpperCase() + string.slice(1);
// }

// const App = () => {
//   const [query, setQuery] = useState({ q: 'new york' });
//   const [units, setUnits] = useState('metric');
//   const [weather, setWeather] = useState(null);

//   const getWeather = async () => {
//     const cityName = query.q ? query.q : 'current location';
//     toast.info(`Fetching weather data for ${capitalizeFLetter(cityName)}`);

//     try {
//       const data = await getFormattedWeatherData({ ...query, units });
//       if (data) {
//         toast.success(`Here is the weather data for ${data.name}, ${data.country}`);
//         setWeather(data);
//       } else {
//         toast.error('Failed to fetch weather data');
//       }
//     } catch (error) {
//       toast.error('An error occurred while fetching weather data');
//     }
//   };

//   useEffect(() => {
//     getWeather();
//   }, [query, units]);

//   const formatBackground = () => {
//     if (!weather) return 'from-cyan-600 to-blue-700';
//     const threshold = units === 'metric' ? 20 : 60;
//     if (weather.temp <= threshold) return 'from-cyan-600 to-blue-700';
//     return 'from-yellow-600 to-orange-700';
//   };

//   return (
//     <div className={`mx-auto max-w-screen-lg mt-4 py-2 px-32 bg-gradient-to-bl shadow-xl shadow-gray-300 ${formatBackground()}`}>
//       <SearchButtons setQuery={setQuery} />
//       <SearchInputs setQuery={setQuery} setUnits={setUnits} />

//       {weather && (
//         <>
//           <Location weather={weather} />
//           <TemperatureDetails weather={weather} units={units} />
//           <Forecast title='3 hour step forecast' data={weather.hourly} />
//           <Forecast title='daily forecast' data={weather.daily} />
//         </>
//       )}

//       <ToastContainer autoClose={2500} hideProgressBar={true} theme='colored' />
//     </div>
//   );
// };

// export default App;




// import { useEffect, useState } from 'react';
// import Forecast from './components/Forecast';
// import Location from './components/Location';
// import SearchButtons from './components/SearchButtons';
// import SearchInputs from './components/SearchInputs';
// import TemperatureDetails from './components/TemperatureDetails';
// import getFormattedWeatherData from './services/weatherService';

// const App = () => {
//   const [query, setQuery] = useState({ q: 'new york' });
//   const [units, setUnits] = useState('metric');
//   const [weather, setWeather] = useState(null);

//   const getWeather = async () => {
//     const data = await getFormattedWeatherData({ ...query, units });
//     setWeather(data);
//   };

//   useEffect(() => {
//     getWeather();
//   }, [query, units]);

//   return (
//     <div className='mx-auto max-w-screen-lg mt-4 py-2 px-32 bg-gradient-to-bl shadow-xl shadow-gray-300 from-cyan-600 to-blue-700'>
//       <SearchButtons setQuery={setQuery} setUnits={setUnits} />
//       <SearchInputs setQuery={setQuery} />

//       {weather ? (
//         <>
//           <Location weather={weather} />
//           <TemperatureDetails weather={weather} />
//           <Forecast title="Hourly Forecast" items={weather.hourly} />
//           <Forecast title="Daily Forecast" items={weather.daily} />
//         </>
//       ) : (
//         <p className='text-white text-center text-xl'>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default App;




