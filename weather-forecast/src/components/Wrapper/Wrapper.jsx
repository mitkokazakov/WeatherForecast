import React from 'react'
import style from '../Wrapper/Wrapper.module.css'
import NavBar from '../NavBar/NavBar'
import Container from '../Container/Container'
import WeatherContext from '../WeatherContext/WeatherContext'

import { useState, useEffect } from 'react';

import * as weatherServices from '../../services/weatherService'

function Wrapper() {

  const [city, setCity] = useState(null);

  useEffect(() => {

    const fetchCityName = async () => {

      const cityInfo = await weatherServices.getCityByLocation();

      setCity(cityInfo);
    };

    fetchCityName();

    console.log(city);

  }, []);

  console.log(city);

  return (

    <div className={style.wrapper}>
      <WeatherContext.Provider value={{city,setCity}}>
        <NavBar></NavBar>
        {city && <Container city={city}></Container>}
      </WeatherContext.Provider>
    </div>
  )
}

export default Wrapper