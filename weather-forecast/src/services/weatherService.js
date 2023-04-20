
const apiKey = 'a5254b2031874dbeb49115909230304';

const baseURL = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&aqi=no&days=3&q=selfoss`;

export const getDailyWeatherInfo = (city) => {

    return fetch(baseURL).then(result => result.json());

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