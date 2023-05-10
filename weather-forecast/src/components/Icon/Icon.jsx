import React, { useState,useEffect,useContext } from 'react'

import * as iconService from '../../services/iconService'

function Icon({code,isDay,text}) {


    const [currentIcon,setCurrentIcon] = useState(null);

    useEffect(() => {

        let icon = iconService.fetchIcons(code,isDay);

        setCurrentIcon(icon);

        
    },[text]);


  return (
    <div>
        
        {currentIcon && currentIcon}

    </div>
  )
}

export default Icon