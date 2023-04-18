import React from 'react'
import style from '../Container/Container.module.css'
import CurrentDay from '../CurrentDay/CurrentDay'
import Weekly from '../Weekly/Weekly'
import Hourly from '../Hourly/Hourly'

function Container() {
  return (
    <div className={style.weatherContainer}>
        <CurrentDay></CurrentDay>
        <Weekly />
        <Hourly />
    </div>
  )
}

export default Container