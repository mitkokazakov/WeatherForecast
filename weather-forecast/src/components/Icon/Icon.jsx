import React, { useState,useEffect,useContext } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faMoon, faCloud, faSun, faCloudRain, faCloudShowersHeavy, faSnowflake,faCloudSun } from '@fortawesome/free-solid-svg-icons'

import WeatherContext from '../WeatherContext/WeatherContext';

function Icon({classToBe,text}) {

    const {city,setCity} = useContext(WeatherContext);

    const[sun,setSun] = useState(null);
    const[cloud,setCloud] = useState(null);
    const[rain,setRain] = useState(null);
    const[partlyCloud,setPartlyCloud] = useState(null);
    const[snow,setSnow] = useState(null);
    const[clear,setClear] = useState(null);

    useEffect(() => {

        setSun(null);
        setCloud(null);
        setRain(null);
        setPartlyCloud(null);
        setSnow(null);
        setClear(null);

        if(text.toLowerCase().includes('clear')){
            setClear('clear');
        }

        if(text.toLowerCase().includes('rain')){
            setRain('rain');
        }

        if(text.toLowerCase().includes('cloud')){

            if(text.toLowerCase().includes('partly cloud')){
                setPartlyCloud('partly cloud');
            }
            else{
                setCloud('cloud');
            }
            
        }

        if(text.toLowerCase().includes('snow')){
            setSnow('snow');
        }


        if(text.toLowerCase().includes('sun')){
            setSun('sun');
        }

        
    },[text]);

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