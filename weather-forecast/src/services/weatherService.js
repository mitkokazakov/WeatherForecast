import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faMoon, faCloud, faSun, faCloudRain, faCloudShowersHeavy, faSnowflake,faCloudSun } from '@fortawesome/free-solid-svg-icons'

const apiKey = 'a5254b2031874dbeb49115909230304';

const baseURL = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&aqi=no&days=3&q=`;

export const getDailyWeatherInfo = (city) => {

    return fetch(baseURL).then(result => result.json());

}

export const getAllData = async (city) => {

    let response = await fetch(baseURL + city);

    let data = await response.json();

    return data;

    //return fetch(baseURL).then(result => result.json());

}

export const getLongtitudeAndLatitude = async () => {

    let resp = await getLocation();

    return {
        latitude: resp.coords.latitude,
        longtitude: resp.coords.longtitude
    }
}

const getLocation = () => {
    return new Promise((res, rej) => {

        navigator.geolocation.getCurrentPosition(success);


        function success(position) {
            res(position)
        }

    });
}

export const getCityByLocation = async () => {

    let latitude = (await getLongtitudeAndLatitude()).latitude;
    let longtitude = (await getLongtitudeAndLatitude()).longtitude;

    let geoUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longtitude}&localityLanguage=en`;

    let response = await fetch(geoUrl);

    let data = await response.json();

    return data.city;
}

export const currentDayInformation = (data) => {

    let sunrise = data.forecast.forecastday[0].astro.sunrise;
    let sunset = data.forecast.forecastday[0].astro.sunset;

    let formattedSunrise = null;
    let formattedSunset = null;

    if(sunrise[0] == '0'){
        formattedSunrise = sunrise.slice(1);
    }
    else{
        formattedSunrise = sunrise
    }

    if(sunset[0] == '0'){
        formattedSunset = sunset.slice(1);
    }
    else{
        formattedSunset = sunset;
    }

    return {
        currentTemp: data.current.temp_c,
        feelsLike: data.current.feelslike_c,
        currentTime: new Date(data.location.localtime).toLocaleDateString('en-US', { weekday: 'long', hour: 'numeric', minute: 'numeric', hour12: true }),
        currentWeatherText: data.current.condition.text,
        code: data.current.condition.code,
        humidity: data.current.humidity,
        visibility: data.current.vis_km,
        wind: data.current.wind_kph,
        uvIndex: data.current.uv,
        pressure: data.current.pressure_mb,
        sunrise: formattedSunrise,
        sunset: formattedSunset,
        isDay: data.current.is_day
    }
}

export const getProperIcon = (weatherText, styledClass) =>{
    return(<FontAwesomeIcon className={styledClass} icon={faMoon}></FontAwesomeIcon>);
}