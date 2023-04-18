import React from 'react'
import style from '../Weekly/Weekly.module.css'
import DayOfWeek from '../DayOfWeek/DayOfWeek'

function Weekly() {
  return (
    <div className={style.weekly}>
        <h2 className={style.weeklyHeading}>3 Days Forecast</h2>
        <DayOfWeek />
        <DayOfWeek />
        <DayOfWeek />
        <DayOfWeek />
    </div>
  )
}

export default Weekly