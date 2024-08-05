import React, { useState } from 'react';

const SearchButtons = ({ setQuery }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const cities = [
    { id: 1, name: "Lagos" },
    { id: 2, name: "Abidjan" },
    { id: 3, name: "Moscow" },
    { id: 4, name: "Beijing" },
    { id: 5, name: "London" },
  ];

  const handleCityClick = (cityName) => {
    setQuery({ q: cityName });
    setMenuOpen(false); // Close the menu after selection
  };

  return (
    <div className="relative">
      <button
        className="fixed top-6 right-4 text-lg font-medium px-2 py-1 rounded-2xl transition ease-in bg-sky-700 text-white sm:hidden"
        onClick={toggleMenu}
      >
        ☰
      </button>
      <div className={`fixed top-0 right-0 bg-slate-600 opacity-80 text-white rounded-tl-3xl rounded-bl-3xl p-4 transition-transform transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} w-2/5 h-auto sm:w-auto sm:translate-x-0 sm:static sm:bg-transparent sm:flex sm:flex-wrap sm:items-center sm:justify-around sm:my-6`}>
        {cities.map((city) => (
          <button
            key={city.id}
            className="text-lg font-medium hover:bg-sky-700/35 hover:w-auto px-3 py-2 m-2 rounded-2xl transition ease-in w-full sm:w-auto"
            onClick={() => handleCityClick(city.name)}
          >
            {city.name}
          </button>
        ))}
      </div>
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
};

export default SearchButtons;








// import React from 'react';

// const SearchButtons = () => {
//   const cities = [
//     {
//       id: 1,
//       name: "Lagos",
//     },
//     {
//       id: 2,
//       name: "Abidjan",
//     },
//     {
//       id: 3,
//       name: "Moscow",
//     },
//     {
//       id: 4,
//       name: "Beijing",
//     },
//     {
//       id: 5,
//       name: "Lagos",
//     },
//   ];

//   return (
//     <div className="flex flex-wrap items-center justify-around my-6">
//       {cities.map((city) => (
//         <button
//           key={city.id}
//           className="text-lg font-medium hover:bg-gray-600/35 hover:w-auto px-3 py-2 m-2 rounded-2xl transition ease-in w-full sm:w-auto"
//         >
//           {city.name}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default SearchButtons;



// const SearchButtons = ({ setQuery, setUnits }) => {
//   const cities = [
//     { title: 'London' },
//     { title: 'Sydney' },
//     { title: 'Tokyo' },
//     { title: 'Toronto' },
//     { title: 'Paris' }
//   ];

//   return (
//     <div className='flex items-center justify-around my-6'>
//       {cities.map((city) => (
//         <button
//           key={city.title}
//           className='text-white text-lg font-medium'
//           onClick={() => setQuery({ q: city.title })}
//         >
//           {city.title}
//         </button>
//       ))}
//       <div className='flex items-center'>
//         <button
//           className='text-white text-lg font-medium'
//           onClick={() => setUnits(units => units === 'metric' ? 'imperial' : 'metric')}
//         >
        
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SearchButtons;

