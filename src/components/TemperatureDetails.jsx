import { BsFillDropletFill } from 'react-icons/bs'
import { FaThermometerHalf } from 'react-icons/fa'
import { GiSunrise, GiSunset } from 'react-icons/gi'
import { LuWind } from 'react-icons/lu'
import { RiArrowDownDoubleLine, RiArrowUpDoubleLine } from 'react-icons/ri'

const TemperatureDetails = ({
  weather: {
    details,
    icon,
    temp,
    humidity,
    feels_like,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
  },
  units,
}) => {

  const rightWidgetDetails = [
    {
      id: 1,
      title: 'Real Feel',
      Icon: FaThermometerHalf,
      value: `${feels_like.toFixed()}°`,
    },
    {
      id: 2,
      title: 'Humidity',
      Icon: BsFillDropletFill,
      value: `${humidity.toFixed()}%`,
    },
    {
      id: 3,
      title: 'Wind',
      Icon: LuWind,
      value: `${speed.toFixed()} ${ units === 'metric' ? 'km/h' : 'm/s'}`,
    },
  ];

  const bottomWidgetDetails = [
    {
      id: 1,
      title: 'Sunrise',
      Icon: GiSunrise,
      value: sunrise,
    },
    {
      id: 2,
      title: 'Sunset',
      Icon: GiSunset,
      value: sunset,
    },
    {
      id: 3,
      title: 'High',
      Icon: RiArrowUpDoubleLine,
      value: `${temp_max.toFixed()}°`,
    },
    {
      id: 4,
      title: 'Low',
      Icon: RiArrowDownDoubleLine,
      value: `${temp_min.toFixed()}°`,
    },
  ];

  return (
    <div className='p-4'>
      <div className='flex items-center justify-center py-6 text-xl text-sky-300'>
        <p>{details}</p>
      </div>

      <div className='flex flex-col md:flex-row items-center justify-between py-3'>
        <img
          src={icon}
          alt="weather icon"
          className='w-20 mb-4 md:mb-0'
        />
        <p className='text-5xl mb-4 pr-3 pb-2'>{`${temp.toFixed()}°`}</p>

        <div className='flex flex-col space-y-3 items-start'>
          {rightWidgetDetails.map(({ id, Icon, title, value }) => (
            <div key={id} className='flex font-light text-sm items-center justify-center'>
              <Icon size={18} className='mr-2' />
              {`${title}:`} <span className='font-medium ml-2'>{value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-6 text-sm py-3 mt-3'>
        {bottomWidgetDetails.map(({ id, Icon, title, value }) => (
          <div key={id} className='flex flex-row items-center my-2'>
            <Icon size={25} />
            <p className='px-1'>
              {`${title}:`}
              <span className='font-medium ml-1'>{value}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TemperatureDetails
