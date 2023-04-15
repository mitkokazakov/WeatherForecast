import React from 'react'
import style from '../CurrentDay/CurrentDay.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCloud } from '@fortawesome/free-solid-svg-icons' 


function CurrentDay() {
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
                    <p className={style.currentDayTemp}>20<span className={style.currentDayTempDegrees}>°C</span></p>
                    <p className={style.currentDayForecast}>Sunny</p>
                    <p className={style.currentDayDate}>Tuesday, 2 pm</p>
                </div>
            </div>

            <div className={style.currentDayDetails}>
                {/* <div class="parameter">
                    <p class="parameter-value">18°C</p>

                    <i class="fa-regular fa-sun"></i>

                    <p class="parameter-name">Feels like</p>
                </div>

                <div class="parameter">
                    <p class="parameter-value">18°C</p>

                    <i class="fa-regular fa-sun"></i>

                    <p class="parameter-name">Feels like</p>
                </div>

                <div class="parameter">
                    <p class="parameter-value">18°C</p>

                    <i class="fa-regular fa-sun"></i>

                    <p class="parameter-name">Feels like</p>
                </div>

                <div class="parameter">
                    <p class="parameter-value">18°C</p>

                    <i class="fa-regular fa-sun"></i>

                    <p class="parameter-name">Feels like</p>
                </div>

                <div class="parameter">
                    <p class="parameter-value">18°C</p>

                    <i class="fa-regular fa-sun"></i>

                    <p class="parameter-name">Feels like</p>
                </div>

                <div class="parameter">
                    <p class="parameter-value">18°C</p>

                    <i class="fa-regular fa-sun"></i>

                    <p class="parameter-name">Feels like</p>
                </div> */}

            </div>
        </div>
    )
}

export default CurrentDay