import React from 'react'
import style from '../DayOfWeek/DayOfWeek.module.css'

import Icon from '../Icon/Icon'


function DayOfWeek({weatherInfo}) {

    
    return (
        <div className={style.weekDay}>
            {weatherInfo && <p className={style.weekDayDate}>{weatherInfo.date}</p>}

            <div className={style.weekDayIconDegrees}>
                {/* <FontAwesomeIcon className={style.weekDayIcon} icon={faSun} /> */}
                {weatherInfo && <Icon code={weatherInfo.code} isDay={1} text={weatherInfo.forecast} currentClassStyle={style.weekDayIcon}></Icon>}
                <div className={style.weekDayDegrees}>
                    {weatherInfo && <p className={style.weekDayMaxTemp}>{weatherInfo.maxTemp}°</p>}
                    {weatherInfo && <p className={style.weekDayMinTemp}>{weatherInfo.minTemp}°</p>}
                </div>
            </div>

            {weatherInfo && <p className={style.weekDayForecast}>{weatherInfo.forecast}</p>}

        </div>
    )
}

export default DayOfWeek