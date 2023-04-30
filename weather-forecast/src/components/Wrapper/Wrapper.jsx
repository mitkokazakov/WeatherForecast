import React from 'react'
import style from '../Wrapper/Wrapper.module.css'
import NavBar from '../NavBar/NavBar'
import Container from '../Container/Container'

import { useState, useEffect } from 'react';

import * as weatherServices from '../../services/weatherService'

function Wrapper() {

  const[city,setCity] = useState(null);

  useEffect(() =>{

    const fetchCityName = async () => {

      const cityInfo = await weatherServices.getCityByLocation();

      setCity(cityInfo);
    };

    fetchCityName();

  },[]);

  return (

    <div className={style.wrapper}>
      <NavBar></NavBar>
      {city && <Container city={city}></Container>}
    </div>
  )
}

export default Wrapper