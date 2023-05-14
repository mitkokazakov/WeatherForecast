import React from 'react'
import style from '../Hourly/Hourly.module.css'
import LineChart from '../LineChart/LineChart'
import {Chart as ChartJS} from 'chart.js/auto'

import { useState,useEffect } from 'react'

import * as weatherServices from '../../services/weatherService'

function Hourly({data}) {

    const [hourlyForecast, setHourlyForecast] = useState(null);
    const [hourlyForecastToString, setHourlyForecastToString] = useState(null);

    useEffect(() => {

        let currentHourlyData = weatherServices.fetchHourlyData(data);
        let currentHourlyDataToString = weatherServices.fetchHourlyDataToString(data);

        setHourlyForecast(currentHourlyData);
        setHourlyForecastToString(currentHourlyDataToString)

    },[data]);

    return (
        <div className={style.hourly}>
            <h2 className={style.hourlyHeading}>Hourly</h2>
            {/* <canvas id="myChart"></canvas> */}
            {hourlyForecast && <LineChart className={style.chart} hourlyData={hourlyForecast} hourlyDataToString={hourlyForecastToString}></LineChart>}
        </div>
    )
}

export default Hourly