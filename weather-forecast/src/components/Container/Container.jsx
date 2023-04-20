import React from 'react'
import style from '../Container/Container.module.css'
import CurrentDay from '../CurrentDay/CurrentDay'
import Weekly from '../Weekly/Weekly'
import Hourly from '../Hourly/Hourly'

import { useState, useEffect } from 'react'

import * as weatherServices from '../../services/weatherService'

function Container() {


  const [weatherInfo, setWeatherInfo] = useState({});

  const [cityName, setCityName] = useState('');


  useEffect(() => {

    weatherServices.getDailyWeatherInfo('KK').then(data => setWeatherInfo({
      currentTemp: data.current.temp_c,
      feelsLike: data.current.feelslike_c,
      currentTime: new Date(data.location.localtime).toLocaleDateString('en-US', { weekday: 'long', hour: 'numeric', minute: 'numeric', hour12: true }),
      currentWeatherText: data.current.condition.text,
      humidity: data.current.humidity,
      visibility: data.current.vis_km,
      wind: data.current.wind_kph,
      uvIndex: data.current.uv,
      pressure: data.current.pressure_mb,
      sunrise: data.forecast.forecastday[0].astro.sunrise,
      sunset: data.forecast.forecastday[0].astro.sunset
    }));

    const fetchCityName = async () => {

      const cityInfo = await weatherServices.getCityByLocation();

      setCityName(cityInfo);
    };

    fetchCityName();

  }, []);



  console.log(weatherInfo);

  console.log(cityName);

  return (
    <div className={style.weatherContainer}>
      <CurrentDay weatherInfo = {weatherInfo}></CurrentDay>
      <Weekly />
      <Hourly />
    </div>
  )
}

export default Container