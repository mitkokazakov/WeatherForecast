import React from 'react'
import style from '../Container/Container.module.css'
import CurrentDay from '../CurrentDay/CurrentDay'
import Weekly from '../Weekly/Weekly'
import Hourly from '../Hourly/Hourly'
import WeatherContext from '../WeatherContext/WeatherContext'

import { useState, useEffect, useContext } from 'react'

import Swal from 'sweetalert2'

import * as weatherServices from '../../services/weatherService'

function Container() {

  const[allData,setAllData] = useState(null);
  const {city,setCity} = useContext(WeatherContext);

  useEffect(() =>{

    const fetchGlobalData = async () =>{

      let currentGlobalData = await weatherServices.getAllData(city);

      if(currentGlobalData.hasOwnProperty('error')){
        return Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Wrong town name! Please insert correct town!'
        })
      }
      else{

        setAllData(currentGlobalData);
      }

    }

    fetchGlobalData();

  },[city]);

  return (
    <div className={style.weatherContainer}>
      {allData && <CurrentDay data={allData} ></CurrentDay>}
      {allData && <Weekly data={allData}/>}
      {allData && <Hourly data={allData}/>}
    </div>
  )
}

export default Container