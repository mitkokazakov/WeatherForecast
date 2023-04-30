import React, { useState,useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faMoon, faCloud, faSun, faCloudRain, faCloudShowersHeavy, faSnowflake,faCloudSun } from '@fortawesome/free-solid-svg-icons'

function Icon({classToBe,text}) {

    const[sun,setSun] = useState(null);
    const[cloud,setCloud] = useState(null);
    const[rain,setRain] = useState(null);
    const[partlyCloud,setPartlyCloud] = useState(null);
    const[snow,setSnow] = useState(null);
    const[clear,setClear] = useState(null);

    useEffect(() => {

        if(text.toLowerCase().includes('clear')){
            setClear('clear');
        }

        if(text.toLowerCase().includes('rain')){
            setRain('rain');
        }

        if(text.toLowerCase().includes('cloud')){
            setCloud('cloud');
        }

        if(text.toLowerCase().includes('snow')){
            setSnow('snow');
        }

        if(text.toLowerCase().includes('partly cloud')){
            setPartlyCloud('partly cloud');
        }

        if(text.toLowerCase().includes('sun')){
            setSun('sun');
        }

        
    },[]);

  return (
    <div>
        {rain &&<FontAwesomeIcon className={classToBe} icon={faCloudRain}></FontAwesomeIcon>}
        {sun &&<FontAwesomeIcon className={classToBe} icon={faSun}></FontAwesomeIcon>}
        {cloud &&<FontAwesomeIcon className={classToBe} icon={faCloud}></FontAwesomeIcon>}

        {partlyCloud &&<FontAwesomeIcon className={classToBe} icon={faCloudSun}></FontAwesomeIcon>}
        {snow &&<FontAwesomeIcon className={classToBe} icon={faSnowflake}></FontAwesomeIcon>}
        {clear &&<FontAwesomeIcon className={classToBe} icon={faMoon}></FontAwesomeIcon>}
    </div>
  )
}

export default Icon