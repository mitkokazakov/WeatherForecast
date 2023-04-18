import React from 'react'
import style from '../DayOfWeek/DayOfWeek.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-regular-svg-icons'

function DayOfWeek() {
    return (
        <div className={style.weekDay}>
            <p className={style.weekDayDate}>Mon 23</p>

            <div className={style.weekDayIconDegrees}>
                {/* <i class="fa-regular fa-sun"></i> */}
                <FontAwesomeIcon className={style.weekDayIcon} icon={faSun} />
                <div className={style.weekDayDegrees}>
                    <p className={style.weekDayMaxTemp}>23°</p>
                    <p className={style.weekDayMinTemp}>10°</p>
                </div>
            </div>

            <p className={style.weekDayForecast}>Sunny</p>

        </div>
    )
}

export default DayOfWeek