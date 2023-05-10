import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faCloud, faSun, faCloudRain, faSnowflake,faCloudSun,faSmog,faCloudBolt,faWind,faCloudShowersHeavy, faCloudShowersWater, faIcicles, faCloudSunRain, faCloudMoon, faCloudMoonRain, faTemperatureHigh,faDroplet,faEye,faMountainSun } from '@fortawesome/free-solid-svg-icons'

import style from '../components/CurrentDay/CurrentDay.module.css';
import styleIconParam from '../components/Parameter/Parameter.module.css';


const dayIcons = {
    1000: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faSun}></FontAwesomeIcon>,
    1003: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudSun}></FontAwesomeIcon>,
    1006: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloud}></FontAwesomeIcon>,
    1009: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloud}></FontAwesomeIcon>,
    1030: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faSmog}></FontAwesomeIcon>,
    1063: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudSunRain}></FontAwesomeIcon>,
    1066: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faSnowflake}></FontAwesomeIcon>,
    1069: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudRain}></FontAwesomeIcon>,
    1072: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudRain}></FontAwesomeIcon>,
    1087: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudBolt}></FontAwesomeIcon>,
    1114: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faSnowflake}></FontAwesomeIcon>,
    1117: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faWind}></FontAwesomeIcon>,
    1135: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faSmog}></FontAwesomeIcon>,
    1147: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faSmog}></FontAwesomeIcon>,
    1150: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudSunRain}></FontAwesomeIcon>,
    1153: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudRain}></FontAwesomeIcon>,
    1168: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudRain}></FontAwesomeIcon>,
    1171: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudShowersHeavy}></FontAwesomeIcon>,
    1180: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudSunRain}></FontAwesomeIcon>,
    1183: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudRain}></FontAwesomeIcon>,
    1186: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudShowersHeavy}></FontAwesomeIcon>,
    1189: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudShowersHeavy}></FontAwesomeIcon>,
    1192: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudShowersWater}></FontAwesomeIcon>,
    1195: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudShowersWater}></FontAwesomeIcon>,
    1198: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudRain}></FontAwesomeIcon>,
    1201: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudShowersHeavy}></FontAwesomeIcon>,
    1204: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudRain}></FontAwesomeIcon>,
    1207: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudShowersHeavy}></FontAwesomeIcon>,
    1210: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faSnowflake}></FontAwesomeIcon>,
    1213: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faSnowflake}></FontAwesomeIcon>,
    1216: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faSnowflake}></FontAwesomeIcon>,
    1219: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faSnowflake}></FontAwesomeIcon>,
    1222: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faSnowflake}></FontAwesomeIcon>,
    1225: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faSnowflake}></FontAwesomeIcon>,
    1237: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faIcicles}></FontAwesomeIcon>,
    1240: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudRain}></FontAwesomeIcon>,
    1243: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudShowersHeavy}></FontAwesomeIcon>,
    1246: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudShowersWater}></FontAwesomeIcon>,
    1249: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudRain}></FontAwesomeIcon>,
    1252: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudShowersHeavy}></FontAwesomeIcon>,
    1255: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faSnowflake}></FontAwesomeIcon>,
    1258: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faSnowflake}></FontAwesomeIcon>,
    1261: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faIcicles}></FontAwesomeIcon>,
    1264: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faIcicles}></FontAwesomeIcon>,
    1273: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudBolt}></FontAwesomeIcon>,
    1276: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudBolt}></FontAwesomeIcon>,
    1279: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudBolt}></FontAwesomeIcon>,
    1282: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudBolt}></FontAwesomeIcon>,
}

const nightIcons = {
    1000: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faMoon}></FontAwesomeIcon>,
    1003: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudMoon}></FontAwesomeIcon>,
    1006: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudMoon}></FontAwesomeIcon>,
    1009: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloud}></FontAwesomeIcon>,
    1030: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faSmog}></FontAwesomeIcon>,
    1063: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudMoonRain}></FontAwesomeIcon>,
    1066: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faSnowflake}></FontAwesomeIcon>,
    1069: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudMoonRain}></FontAwesomeIcon>,
    1072: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudMoonRain}></FontAwesomeIcon>,
    1087: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudBolt}></FontAwesomeIcon>,
    1114: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faSnowflake}></FontAwesomeIcon>,
    1117: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faWind}></FontAwesomeIcon>,
    1135: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faSmog}></FontAwesomeIcon>,
    1147: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faSmog}></FontAwesomeIcon>,
    1150: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudMoonRain}></FontAwesomeIcon>,
    1153: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudMoonRain}></FontAwesomeIcon>,
    1168: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudMoonRain}></FontAwesomeIcon>,
    1171: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudShowersHeavy}></FontAwesomeIcon>,
    1180: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudMoonRain}></FontAwesomeIcon>,
    1183: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudMoonRain}></FontAwesomeIcon>,
    1186: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudMoonRain}></FontAwesomeIcon>,
    1189: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudMoonRain}></FontAwesomeIcon>,
    1192: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudShowersWater}></FontAwesomeIcon>,
    1195: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudShowersWater}></FontAwesomeIcon>,
    1198: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudRain}></FontAwesomeIcon>,
    1201: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudShowersHeavy}></FontAwesomeIcon>,
    1204: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudRain}></FontAwesomeIcon>,
    1207: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudShowersHeavy}></FontAwesomeIcon>,
    1210: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faSnowflake}></FontAwesomeIcon>,
    1213: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faSnowflake}></FontAwesomeIcon>,
    1216: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faSnowflake}></FontAwesomeIcon>,
    1219: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faSnowflake}></FontAwesomeIcon>,
    1222: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faSnowflake}></FontAwesomeIcon>,
    1225: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faSnowflake}></FontAwesomeIcon>,
    1237: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faIcicles}></FontAwesomeIcon>,
    1240: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudMoonRain}></FontAwesomeIcon>,
    1243: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudMoonRain}></FontAwesomeIcon>,
    1246: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudShowersWater}></FontAwesomeIcon>,
    1249: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudMoonRain}></FontAwesomeIcon>,
    1252: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudShowersHeavy}></FontAwesomeIcon>,
    1255: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faSnowflake}></FontAwesomeIcon>,
    1258: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faSnowflake}></FontAwesomeIcon>,
    1261: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faIcicles}></FontAwesomeIcon>,
    1264: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faIcicles}></FontAwesomeIcon>,
    1273: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudBolt}></FontAwesomeIcon>,
    1276: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudBolt}></FontAwesomeIcon>,
    1279: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudBolt}></FontAwesomeIcon>,
    1282: <FontAwesomeIcon className={style.currentDayInfoIcon} icon={faCloudBolt}></FontAwesomeIcon>,
}

const parameterIcons = {
    Feels: <FontAwesomeIcon className={styleIconParam.parameterIcon} icon={faTemperatureHigh}></FontAwesomeIcon>,
    Humidity: <FontAwesomeIcon className={styleIconParam.parameterIcon} icon={faDroplet}></FontAwesomeIcon>,
    Visibility: <FontAwesomeIcon className={styleIconParam.parameterIcon} icon={faEye}></FontAwesomeIcon>,
    Wind: <FontAwesomeIcon className={styleIconParam.parameterIcon} icon={faWind}></FontAwesomeIcon>,
    Sunrise: <FontAwesomeIcon className={styleIconParam.parameterIcon} icon={faSun}></FontAwesomeIcon>,
    Sunset: <FontAwesomeIcon className={styleIconParam.parameterIcon} icon={faMountainSun}></FontAwesomeIcon>,
}

export const fetchIcons = (code, isDay) => {

    if(isDay == 1){
        return (dayIcons[code]);
    }
    else{
        return (nightIcons[code]);
    }
    
}

export const fetchSingleParameterIcon = (parameterName) => {

    return(parameterIcons[parameterName]);
    
}