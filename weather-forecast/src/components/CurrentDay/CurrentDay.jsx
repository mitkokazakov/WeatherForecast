import React from 'react'
import style from '../CurrentDay/CurrentDay.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCloud } from '@fortawesome/free-solid-svg-icons' 
import Parameter from '../Parameter/Parameter'


function CurrentDay({weatherInfo}) {
    return (
        <div className={style.currentDay}>
            <form action="" className={style.currentDayForm}>
                <input type="text" className={style.currentDayInput} placeholder="Search.." />
                <button type="submit" className={style.currentDayBtn}>
                    {/* <i class="fa-solid fa-magnifying-glass"></i> */}
                    <FontAwesomeIcon className={style.currentDaySearchIcon} icon={faMagnifyingGlass} />
                </button>
            </form>

            <p className={style.city}>Tromso, NO</p>

            <div className={style.currentDayInfo}>
                {/* <i class="fa-solid fa-cloud"></i> */}
                <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloud} />

                <div className={style.currentDayTemperature}>
                    <p className={style.currentDayTemp}>{weatherInfo.currentTemp}<span className={style.currentDayTempDegrees}>°C</span></p>
                    <p className={style.currentDayForecast}>{weatherInfo.currentWeatherText}</p>
                    <p className={style.currentDayDate}>{weatherInfo.currentTime}</p>
                </div>
            </div>

            <div className={style.currentDayDetails}>
                <Parameter parameterName = {'Feels like'} parameterValue = {weatherInfo.feelsLike + ' °C'}/>
                <Parameter parameterName={'Humidity'} parameterValue={weatherInfo.humidity + ' %'}/>
                <Parameter parameterName={'Visibility'} parameterValue={weatherInfo.visibility + ' km'}/>
                <Parameter parameterName={'Wind'} parameterValue={weatherInfo.wind + ' km/h'}/>
                <Parameter parameterName={'Sunrise'} parameterValue={weatherInfo.sunrise}/>
                <Parameter parameterName={'Sunset'} parameterValue={weatherInfo.sunset}/>

            </div>
        </div>
    )
}

export default CurrentDay