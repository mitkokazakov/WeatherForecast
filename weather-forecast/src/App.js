import './App.css';
import Wrapper from './components/Wrapper/Wrapper';
import { Chart } from 'chart.js/auto'
import { CategoryScale } from "chart.js";

import * as weatherServices from './services/weatherService'

import { useState, useEffect } from 'react';

Chart.register(CategoryScale)

function App() {

  // const[city,setCity] = useState(null);

  // useEffect(() =>{

  //   const fetchCityName = async () => {

  //     const cityInfo = await weatherServices.getCityByLocation();

  //     setCity(cityInfo);
  //   };

  //   fetchCityName();

  // },[]);

  return (
    <div className="App">
      <Wrapper />
    </div>
  )
}

export default App;
