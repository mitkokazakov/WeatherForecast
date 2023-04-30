import React from 'react'
import style from '../Container/Container.module.css'
import CurrentDay from '../CurrentDay/CurrentDay'
import Weekly from '../Weekly/Weekly'
import Hourly from '../Hourly/Hourly'

import { useState, useEffect } from 'react'

import * as weatherServices from '../../services/weatherService'

function Container({city}) {

  //const[city,setCity] = useState(null);
  const[allData,setAllData] = useState(null);

  useEffect(() =>{

    // const fetchCityName = async () => {

    //   const cityInfo = await weatherServices.getCityByLocation();

    //   setCity(cityInfo);
    // };

    const fetchGlobalData = async () =>{

      let currentGlobalData = await weatherServices.getAllData(city);

      setAllData(currentGlobalData);

    }

    //fetchCityName();
    fetchGlobalData();

  },[]);

  return (
    <div className={style.weatherContainer}>
      {allData && <CurrentDay data={allData} city={city} ></CurrentDay>}
      <Weekly />
      <Hourly />
    </div>
  )
}

export default Container