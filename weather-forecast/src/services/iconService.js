import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faCloud, faSun, faCloudRain, faSnowflake, faCloudSun, faSmog, faCloudBolt, faWind, faCloudShowersHeavy, faCloudShowersWater, faIcicles, faCloudSunRain, faCloudMoon, faCloudMoonRain, faTemperatureHigh, faDroplet, faEye, faMountainSun } from '@fortawesome/free-solid-svg-icons'

import style from '../components/CurrentDay/CurrentDay.module.css';


const dayIcons = {
    1000: <FontAwesomeIcon  icon={faSun}></FontAwesomeIcon>,
    1003: <FontAwesomeIcon icon={faCloudSun}></FontAwesomeIcon>,
    1006: <FontAwesomeIcon icon={faCloud}></FontAwesomeIcon>,
    1009: <FontAwesomeIcon icon={faCloud}></FontAwesomeIcon>,
    1030: <FontAwesomeIcon icon={faSmog}></FontAwesomeIcon>,
    1063: <FontAwesomeIcon icon={faCloudSunRain}></FontAwesomeIcon>,
    1066: <FontAwesomeIcon icon={faSnowflake}></FontAwesomeIcon>,
    1069: <FontAwesomeIcon icon={faCloudRain}></FontAwesomeIcon>,
    1072: <FontAwesomeIcon icon={faCloudRain}></FontAwesomeIcon>,
    1087: <FontAwesomeIcon icon={faCloudBolt}></FontAwesomeIcon>,
    1114: <FontAwesomeIcon icon={faSnowflake}></FontAwesomeIcon>,
    1117: <FontAwesomeIcon icon={faWind}></FontAwesomeIcon>,
    1135: <FontAwesomeIcon icon={faSmog}></FontAwesomeIcon>,
    1147: <FontAwesomeIcon icon={faSmog}></FontAwesomeIcon>,
    1150: <FontAwesomeIcon icon={faCloudSunRain}></FontAwesomeIcon>,
    1153: <FontAwesomeIcon icon={faCloudRain}></FontAwesomeIcon>,
    1168: <FontAwesomeIcon icon={faCloudRain}></FontAwesomeIcon>,
    1171: <FontAwesomeIcon icon={faCloudShowersHeavy}></FontAwesomeIcon>,
    1180: <FontAwesomeIcon icon={faCloudSunRain}></FontAwesomeIcon>,
    1183: <FontAwesomeIcon icon={faCloudRain}></FontAwesomeIcon>,
    1186: <FontAwesomeIcon icon={faCloudShowersHeavy}></FontAwesomeIcon>,
    1189: <FontAwesomeIcon icon={faCloudShowersHeavy}></FontAwesomeIcon>,
    1192: <FontAwesomeIcon icon={faCloudShowersWater}></FontAwesomeIcon>,
    1195: <FontAwesomeIcon icon={faCloudShowersWater}></FontAwesomeIcon>,
    1198: <FontAwesomeIcon icon={faCloudRain}></FontAwesomeIcon>,
    1201: <FontAwesomeIcon icon={faCloudShowersHeavy}></FontAwesomeIcon>,
    1204: <FontAwesomeIcon icon={faCloudRain}></FontAwesomeIcon>,
    1207: <FontAwesomeIcon icon={faCloudShowersHeavy}></FontAwesomeIcon>,
    1210: <FontAwesomeIcon icon={faSnowflake}></FontAwesomeIcon>,
    1213: <FontAwesomeIcon icon={faSnowflake}></FontAwesomeIcon>,
    1216: <FontAwesomeIcon icon={faSnowflake}></FontAwesomeIcon>,
    1219: <FontAwesomeIcon icon={faSnowflake}></FontAwesomeIcon>,
    1222: <FontAwesomeIcon icon={faSnowflake}></FontAwesomeIcon>,
    1225: <FontAwesomeIcon icon={faSnowflake}></FontAwesomeIcon>,
    1237: <FontAwesomeIcon icon={faIcicles}></FontAwesomeIcon>,
    1240: <FontAwesomeIcon icon={faCloudRain}></FontAwesomeIcon>,
    1243: <FontAwesomeIcon icon={faCloudShowersHeavy}></FontAwesomeIcon>,
    1246: <FontAwesomeIcon icon={faCloudShowersWater}></FontAwesomeIcon>,
    1249: <FontAwesomeIcon icon={faCloudRain}></FontAwesomeIcon>,
    1252: <FontAwesomeIcon icon={faCloudShowersHeavy}></FontAwesomeIcon>,
    1255: <FontAwesomeIcon icon={faSnowflake}></FontAwesomeIcon>,
    1258: <FontAwesomeIcon icon={faSnowflake}></FontAwesomeIcon>,
    1261: <FontAwesomeIcon icon={faIcicles}></FontAwesomeIcon>,
    1264: <FontAwesomeIcon icon={faIcicles}></FontAwesomeIcon>,
    1273: <FontAwesomeIcon icon={faCloudBolt}></FontAwesomeIcon>,
    1276: <FontAwesomeIcon icon={faCloudBolt}></FontAwesomeIcon>,
    1279: <FontAwesomeIcon icon={faCloudBolt}></FontAwesomeIcon>,
    1282: <FontAwesomeIcon icon={faCloudBolt}></FontAwesomeIcon>,
}

const nightIcons = {
    1000: <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>,
    1003: <FontAwesomeIcon icon={faCloudMoon}></FontAwesomeIcon>,
    1006: <FontAwesomeIcon icon={faCloudMoon}></FontAwesomeIcon>,
    1009: <FontAwesomeIcon icon={faCloud}></FontAwesomeIcon>,
    1030: <FontAwesomeIcon icon={faSmog}></FontAwesomeIcon>,
    1063: <FontAwesomeIcon icon={faCloudMoonRain}></FontAwesomeIcon>,
    1066: <FontAwesomeIcon icon={faSnowflake}></FontAwesomeIcon>,
    1069: <FontAwesomeIcon icon={faCloudMoonRain}></FontAwesomeIcon>,
    1072: <FontAwesomeIcon icon={faCloudMoonRain}></FontAwesomeIcon>,
    1087: <FontAwesomeIcon icon={faCloudBolt}></FontAwesomeIcon>,
    1114: <FontAwesomeIcon icon={faSnowflake}></FontAwesomeIcon>,
    1117: <FontAwesomeIcon icon={faWind}></FontAwesomeIcon>,
    1135: <FontAwesomeIcon icon={faSmog}></FontAwesomeIcon>,
    1147: <FontAwesomeIcon icon={faSmog}></FontAwesomeIcon>,
    1150: <FontAwesomeIcon icon={faCloudMoonRain}></FontAwesomeIcon>,
    1153: <FontAwesomeIcon icon={faCloudMoonRain}></FontAwesomeIcon>,
    1168: <FontAwesomeIcon icon={faCloudMoonRain}></FontAwesomeIcon>,
    1171: <FontAwesomeIcon icon={faCloudShowersHeavy}></FontAwesomeIcon>,
    1180: <FontAwesomeIcon icon={faCloudMoonRain}></FontAwesomeIcon>,
    1183: <FontAwesomeIcon icon={faCloudMoonRain}></FontAwesomeIcon>,
    1186: <FontAwesomeIcon icon={faCloudMoonRain}></FontAwesomeIcon>,
    1189: <FontAwesomeIcon icon={faCloudMoonRain}></FontAwesomeIcon>,
    1192: <FontAwesomeIcon icon={faCloudShowersWater}></FontAwesomeIcon>,
    1195: <FontAwesomeIcon icon={faCloudShowersWater}></FontAwesomeIcon>,
    1198: <FontAwesomeIcon icon={faCloudRain}></FontAwesomeIcon>,
    1201: <FontAwesomeIcon icon={faCloudShowersHeavy}></FontAwesomeIcon>,
    1204: <FontAwesomeIcon icon={faCloudRain}></FontAwesomeIcon>,
    1207: <FontAwesomeIcon icon={faCloudShowersHeavy}></FontAwesomeIcon>,
    1210: <FontAwesomeIcon icon={faSnowflake}></FontAwesomeIcon>,
    1213: <FontAwesomeIcon icon={faSnowflake}></FontAwesomeIcon>,
    1216: <FontAwesomeIcon icon={faSnowflake}></FontAwesomeIcon>,
    1219: <FontAwesomeIcon icon={faSnowflake}></FontAwesomeIcon>,
    1222: <FontAwesomeIcon icon={faSnowflake}></FontAwesomeIcon>,
    1225: <FontAwesomeIcon icon={faSnowflake}></FontAwesomeIcon>,
    1237: <FontAwesomeIcon icon={faIcicles}></FontAwesomeIcon>,
    1240: <FontAwesomeIcon icon={faCloudMoonRain}></FontAwesomeIcon>,
    1243: <FontAwesomeIcon icon={faCloudMoonRain}></FontAwesomeIcon>,
    1246: <FontAwesomeIcon icon={faCloudShowersWater}></FontAwesomeIcon>,
    1249: <FontAwesomeIcon icon={faCloudMoonRain}></FontAwesomeIcon>,
    1252: <FontAwesomeIcon icon={faCloudShowersHeavy}></FontAwesomeIcon>,
    1255: <FontAwesomeIcon icon={faSnowflake}></FontAwesomeIcon>,
    1258: <FontAwesomeIcon icon={faSnowflake}></FontAwesomeIcon>,
    1261: <FontAwesomeIcon icon={faIcicles}></FontAwesomeIcon>,
    1264: <FontAwesomeIcon icon={faIcicles}></FontAwesomeIcon>,
    1273: <FontAwesomeIcon icon={faCloudBolt}></FontAwesomeIcon>,
    1276: <FontAwesomeIcon icon={faCloudBolt}></FontAwesomeIcon>,
    1279: <FontAwesomeIcon icon={faCloudBolt}></FontAwesomeIcon>,
    1282: <FontAwesomeIcon icon={faCloudBolt}></FontAwesomeIcon>,
}

const parameterIcons = {
    Feels: <FontAwesomeIcon icon={faTemperatureHigh}></FontAwesomeIcon>,
    Humidity: <FontAwesomeIcon icon={faDroplet}></FontAwesomeIcon>,
    Visibility: <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>,
    Wind: <FontAwesomeIcon icon={faWind}></FontAwesomeIcon>,
    Sunrise: <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>,
    Sunset: <FontAwesomeIcon icon={faMountainSun}></FontAwesomeIcon>,
}

export const fetchIcons = (code, isDay) => {

    if (isDay == 1) {
        return (dayIcons[code]);
    }
    else {
        return (nightIcons[code]);
    }

}

export const fetchSingleParameterIcon = (parameterName) => {

    return (parameterIcons[parameterName]);

}