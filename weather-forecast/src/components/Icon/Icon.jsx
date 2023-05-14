import React, { useState,useEffect,useContext } from 'react'

import * as iconService from '../../services/iconService'

function Icon({code,isDay,text,currentClassStyle}) {


    const [currentIcon,setCurrentIcon] = useState(null);

    useEffect(() => {

        let icon = iconService.fetchIcons(code,isDay);

        setCurrentIcon(icon);

        
    },[text]);


  return (
    <div className={currentClassStyle}>
        
        {currentIcon && currentIcon}

    </div>
  )
}

export default Icon