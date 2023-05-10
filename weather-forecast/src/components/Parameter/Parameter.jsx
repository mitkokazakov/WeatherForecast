import React from 'react'
import style from '../Parameter/Parameter.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { useState,useEffect } from 'react'

import * as iconService from '../../services/iconService'

function Parameter({parameterName, parameterValue}) {

    const [parameterIcon,setParameterIcon] = useState(null);

    useEffect(() => {

        let currentParamIcon = iconService.fetchSingleParameterIcon(parameterName);

        setParameterIcon(currentParamIcon);

    },[]);

    return (
        <div className={style.parameter}>
            <p className={style.parameterValue}>{parameterValue}</p>
            
            {/* <FontAwesomeIcon className={style.parameterIcon} icon={faSun} /> */}

            {parameterIcon && parameterIcon}

            <p className={style.parameterName}>{parameterName}</p>
        </div>
    )
}

export default Parameter