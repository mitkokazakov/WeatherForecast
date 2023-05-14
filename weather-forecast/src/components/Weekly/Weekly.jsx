import React from 'react'
import style from '../Weekly/Weekly.module.css'
import DayOfWeek from '../DayOfWeek/DayOfWeek'

import { useState, useEffect } from 'react'

import * as weatherService from '../../services/weatherService'

function Weekly({ data }) {

  const [threeDaysData, setThreeDaysData] = useState(null)

  useEffect(() => {

    let currentThreeDaysData = weatherService.fetchThreeDayForecast(data);

    setThreeDaysData(currentThreeDaysData);

  }, [data]);

  
  return (
    <div className={style.weekly}>
      <h2 className={style.weeklyHeading}>3 Days Forecast </h2>
      {threeDaysData && <DayOfWeek weatherInfo={threeDaysData[0]} />}
      {threeDaysData && <DayOfWeek weatherInfo={threeDaysData[1]} />}
      {threeDaysData && <DayOfWeek weatherInfo={threeDaysData[2]} />}
      {/* <DayOfWeek /> */}
    </div>


  )
}

export default Weekly