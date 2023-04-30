import React from 'react'
import style from '../CurrentDay/CurrentDay.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCloud, faSun, faCloudRain, faCloudShowersHeavy, faSnowflake } from '@fortawesome/free-solid-svg-icons'
import Parameter from '../Parameter/Parameter'
import Icon from '../Icon/Icon'
import WeatherContext from '../WeatherContext/WeatherContext'

import * as weatherServices from '../../services/weatherService'

import { useState, useEffect } from 'react'

function CurrentDay({ data, city }) {

    const [currentDayWeather, setCurrentDayWeather] = useState(null);

    useEffect(() => {

        let currentDay = weatherServices.currentDayInformation(data);

        setCurrentDayWeather(currentDay)
    }, []);

    return (

        <div className={style.currentDay}>

            {currentDayWeather && <form action="" className={style.currentDayForm}>
                <input type="text" className={style.currentDayInput} placeholder="Search.." />
                <button type="submit" className={style.currentDayBtn}>
                    {/* <i class="fa-solid fa-magnifying-glass"></i> */}
                    <FontAwesomeIcon className={style.currentDaySearchIcon} icon={faMagnifyingGlass} />
                </button>
            </form>}

            <p className={style.city}>{city}</p>

            {currentDayWeather && <div className={style.currentDayInfo}>
                
                <Icon classToBe={style.currentDayInfoIcon} text={currentDayWeather.currentWeatherText}></Icon>
                {/* <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloud} /> */}
                {/* <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloud} />
                <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloud} />
                <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloud} />
                <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloud} />
                <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloud} />
                <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloud} /> */}

                <div className={style.currentDayTemperature}>
                    <p className={style.currentDayTemp}>{currentDayWeather.currentTemp}<span className={style.currentDayTempDegrees}>°C</span></p>
                    <p className={style.currentDayForecast}>{currentDayWeather.currentWeatherText}</p>
                    <p className={style.currentDayDate}>{currentDayWeather.currentTime}</p>
                </div>
            </div>}

            {currentDayWeather && <div className={style.currentDayDetails}>
                <Parameter parameterName={'Feels like'} parameterValue={currentDayWeather.feelsLike + ' °C'} />
                <Parameter parameterName={'Humidity'} parameterValue={currentDayWeather.humidity + ' %'} />
                <Parameter parameterName={'Visibility'} parameterValue={currentDayWeather.visibility + ' km'} />
                <Parameter parameterName={'Wind'} parameterValue={currentDayWeather.wind + ' km/h'} />
                <Parameter parameterName={'Sunrise'} parameterValue={currentDayWeather.sunrise} />
                <Parameter parameterName={'Sunset'} parameterValue={currentDayWeather.sunset} />

            </div>}
        </div>
    )
}

export default CurrentDay