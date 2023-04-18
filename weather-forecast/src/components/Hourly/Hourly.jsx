import React from 'react'
import style from '../Hourly/Hourly.module.css'
import LineChart from '../LineChart/LineChart'
import {Chart as ChartJS} from 'chart.js/auto'

function Hourly() {

    return (
        <div className={style.hourly}>
            <h2 className={style.hourlyHeading}>Hourly</h2>
            {/* <canvas id="myChart"></canvas> */}
            <LineChart className={style.chart}></LineChart>
        </div>
    )
}

export default Hourly