import React from 'react'
import style from '../Hourly/Hourly.module.css'

function Hourly() {

    return (
        <div className={style.hourly}>
            <h2 className={style.hourlyHeading}>Hourly</h2>
            <canvas id="myChart"></canvas>
        </div>
    )
}

export default Hourly