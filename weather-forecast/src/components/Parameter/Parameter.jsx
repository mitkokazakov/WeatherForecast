import React from 'react'
import style from '../Parameter/Parameter.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'

function Parameter() {
    return (
        <div className={style.parameter}>
            <p className={style.parameterValue}>18°C</p>

            {/* <i class="fa-regular fa-sun"></i> */}

            <FontAwesomeIcon className={style.parameterIcon} icon={faSun} />

            <p className={style.parameterName}>Feels like</p>
        </div>
    )
}

export default Parameter