import React from 'react'
import style from '../Container/Container.module.css'
import CurrentDay from '../CurrentDay/CurrentDay'

function Container() {
  return (
    <div className={style.weatherContainer}>
        <CurrentDay></CurrentDay>
    </div>
  )
}

export default Container