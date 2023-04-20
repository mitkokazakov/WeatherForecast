import React from 'react'
import style from '../Parameter/Parameter.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'

function Parameter({parameterName, parameterValue}) {
    return (
        <div className={style.parameter}>
            <p className={style.parameterValue}>{parameterValue}</p>

            {/* <i class="fa-regular fa-sun"></i> */}

            <FontAwesomeIcon className={style.parameterIcon} icon={faSun} />

            <p className={style.parameterName}>{parameterName}</p>
        </div>
    )
}

export default Parameter