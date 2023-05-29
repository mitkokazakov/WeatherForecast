import React from 'react'
import style from '../CurrentDay/CurrentDay.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Parameter from '../Parameter/Parameter'
import Icon from '../Icon/Icon'
import WeatherContext from '../WeatherContext/WeatherContext'

import * as weatherServices from '../../services/weatherService'
import * as citiesService from '../../services/citiesService'

import { useState, useEffect, useContext } from 'react'

import { useForm } from 'react-hook-form';

function CurrentDay({ data }) {

    const [currentDayWeather, setCurrentDayWeather] = useState(null);
    const [cities, setCities] = useState(null);
    const { handleSubmit } = useForm();
    const { city, setCity } = useContext(WeatherContext);

    useEffect(() => {

        let currentDay = weatherServices.currentDayInformation(data);

        setCurrentDayWeather(currentDay)
    }, [data]);

    function onSubmitFindCityHandler(data, e) {

        e.preventDefault();

        let currentValue = e.target.cityName.value;

        if (currentValue.includes(",")) {

            let index = currentValue.indexOf(",");

            currentValue = currentValue.substring(0, index + 1);
        }

        // setCity(e.target.cityName.value);

        setCity(currentValue)

    }

    function onChangeInputHandler(e) {

        let currentInput = e.target.value;

        citiesService.fetchData(currentInput).then(data => setCities(data));

        let suggestionsContainer = document.querySelector('#suggestionContainer')

        suggestionsContainer.style.setProperty("display", "block");

    }

    function onCLickCityEvent(e) {

        let currentTown = e.target.innerHTML;

        let inputReference = document.querySelector('#cityName');
        let suggestionsContainer = document.querySelector('#suggestionContainer')

        inputReference.value = currentTown;

        // suggestionsContainer.classList.add('closed');
        suggestionsContainer.style.setProperty("display", "none");
    }

    return (

        <div className={style.currentDay}>

            {currentDayWeather && <form method='get' className={style.currentDayForm} onSubmit={handleSubmit(onSubmitFindCityHandler)}>
                <input type="text" id="cityName" name='cityName' className={style.currentDayInput} placeholder="Search.." onChange={onChangeInputHandler} />
                <button type="submit" className={style.currentDayBtn}>
                    <FontAwesomeIcon className={style.currentDaySearchIcon} icon={faMagnifyingGlass} />
                </button>
                <div id='suggestionContainer' className={style.suggestions}>
                    {cities && cities.map(c => { return <p key={c.population} onClick={onCLickCityEvent}>{c.name}, {c.country}</p> })}
                </div>
            </form>}

            {currentDayWeather && <p className={style.city}>{currentDayWeather.townName}, {currentDayWeather.country}</p>}

            {currentDayWeather && <div className={style.currentDayInfo}>

                <Icon code={currentDayWeather.code} isDay={currentDayWeather.isDay} text={currentDayWeather.currentWeatherText} currentClassStyle={style.currentDayInfoIcon}></Icon>

                <div className={style.currentDayTemperature}>
                    <p className={style.currentDayTemp}>{currentDayWeather.currentTemp}<span className={style.currentDayTempDegrees}>°C</span></p>
                    <p className={style.currentDayForecast}>{currentDayWeather.currentWeatherText}</p>
                    <p className={style.currentDayDate}>{currentDayWeather.currentTime}</p>
                </div>
            </div>}

            {currentDayWeather && <div className={style.currentDayDetails}>
                <Parameter parameterName={'Feels'} parameterValue={currentDayWeather.feelsLike + ' °C'} />
                <Parameter parameterName={'Humidity'} parameterValue={currentDayWeather.humidity + ' %'} />
                <Parameter parameterName={'Visibility'} parameterValue={currentDayWeather.visibility + ' km'} />
                <Parameter parameterName={'Wind'} parameterValue={currentDayWeather.wind + ' km/h'} />
                <Parameter parameterName={'Sunrise'} parameterValue={currentDayWeather.sunrise} />
                <Parameter parameterName={'Sunset'} parameterValue={currentDayWeather.sunset} />

            </div>}
        </div>
    )
}

export default CurrentDay