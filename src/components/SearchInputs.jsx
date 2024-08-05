import React, { useState } from 'react';

const SearchInputs = ({ setQuery, setUnits }) => {
  const [city, setCity] = useState('');

  const handleSearchClick = () => {
    if (city !== '') {
      setQuery({ q: city });
      setCity(''); // Clear the input field after submit
    }
  };


  const handleUnitsChange = (unit) => {
    setUnits(unit);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearchClick();
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center my-6 space-y-4 sm:space-y-0 sm:space-x-4">
      <div className="flex flex-col w-full sm:flex-row sm:w-3/4 items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <input 
          type="text" 
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="search by city..." 
          className="rounded-3xl text-xl font-light capitalize focus:outline-none w-full shadow-xl px-2 py-1 text-gray-500 placeholder:lowercase" 
        />
        
      </div>

      <div className="flex flex-row w-full sm:w-1/4 items-center justify-center space-x-4">
        <button
          className="text-2xl font-medium transition ease-out hover:scale-125"
          onClick={() => handleUnitsChange('metric')}
        >
          °C
        </button>
        <p className="text-2xl font-light mx-3">|</p>
        <button
          className="text-2xl font-medium transition ease-out hover:scale-125"
          onClick={() => handleUnitsChange('imperial')}
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default SearchInputs;






// import { useState } from "react";
// import { BiCurrentLocation, BiSearch } from "react-icons/bi";

// const SearchInputs = ({ setQuery, setUnits }) => {
//   const [city, setCity] = useState('');

//   const handleSearchClick = () => {
//     if (city !== '') setQuery({ q: city });
//   };

//   const handleLocationClick = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition((position) => {
//         const {latitude, longitude} = position.coords
//         setQuery({lat: latitude, lon: longitude})
//       })
//     }
//   }


//   return (
//     <div className="flex flex-col my-6 space-y-4 sm:space-y-0 sm:flex-row sm:justify-center sm:space-x-4">
//       <div className="flex flex-col w-full items-center space-y-4 sm:flex-row sm:w-3/4 sm:items-center sm:space-x-4 sm:space-y-0">
//         <input
//           value = {city}
//           onChange={(e) => setCity(e.currentTarget.value)}
//           type="text" 
//           placeholder="search by city..." 
//           className="rounded-3xl text-xl font-light capitalize focus:outline-none w-full shadow-xl px-2 py-1 text-gray-500 placeholder:lowercase" 
//         />
//       </div>

//       <div className="flex flex-row w-full items-center justify-center space-x-4 sm:w-auto">
//         <BiSearch
//           size={30}
//           className="cursor-pointer transition ease-out hover:scale-125"
//           onClick={handleSearchClick}
//         />
//         <BiCurrentLocation
//           size={30}
//           className="cursor-pointer transition ease-out hover:scale-125"
//           onClick={handleLocationClick}
//         />
//         <button className="text-2xl font-medium transition ease-out hover:scale-125"
//         onClick={() => setUnits('metric')}
//         >
//           °C
//         </button>
//         <p className="text-2xl font-light mx-3">|</p>
//         <button className="text-2xl font-medium transition ease-out hover:scale-125"
//         onClick={() => setUnits('imperial')}
//         >
//           °F
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SearchInputs;






// import { useState } from 'react';
// import { BiCurrentLocation, BiSearch } from "react-icons/bi";

// const SearchInputs = () => {
//   return (
//     <div className="flex flex-col sm:flex-row justify-center my-6 space-y-4 sm:space-y-0 sm:space-x-4">
//       <div className="flex flex-row w-full sm:w-3/4 items-center justify-center space-x-4">
//         <input 
//           type="text" 
//           placeholder="search by city..." 
//           className="rounded-3xl text-xl font-light capitalize focus:outline-none w-full shadow-xl px-2 py-1 text-gray-500 placeholder:lowercase" 
//         />
//         <BiSearch
//           size={30}
//           className="cursor-pointer transition ease-out hover:scale-125"
//         />
//         <BiCurrentLocation
//           size={30}
//           className="cursor-pointer transition ease-out hover:scale-125"
//         />
//       </div>

//       <div className="flex flex-row w-full sm:w-1/4 items-center justify-center space-x-4">
//         <button className="text-2xl font-medium transition ease-out hover:scale-125">
//           °C
//         </button>
//         <p className="text-2xl font-light mx-3">|</p>
//         <button className="text-2xl font-medium transition ease-out hover:scale-125">
//           °F
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SearchInputs;



// import { useState } from 'react';

// const SearchInputs = ({ setQuery }) => {
//   const [city, setCity] = useState('');

//   const handleSearchClick = () => {
//     if (city !== '') setQuery({ q: city });
//   };

//   return (
//     <div className='flex justify-center my-6'>
//       <input
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//         type='text'
//         className='text-xl p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase'
//         placeholder='search for city...'
//       />
//       <button
//         onClick={handleSearchClick}
//         className='text-white text-xl font-medium ml-2'
//       >
//         Search
//       </button>
//     </div>
//   );
// };

// export default SearchInputs;
