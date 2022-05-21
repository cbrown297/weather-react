import React, {useState} from "react";
import axios from "axios";
import './Weather.css';
import WeatherData from "./WeatherData";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Weather(props) {
  const [weather, setWeather] = useState({loaded: false});
  const [city, setCity] = useState(props.defaultCity);

  function showTemperature(response) {
    setWeather(
      {
        loaded: true,
        city: response.data.name,
        date: new Date(response.data.dt*1000),
        temperature: Math.round(response.data.main.temp),
        humidity: response.data.main.humidity,
        wind: Math.round(response.data.wind.speed),
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        alt: response.data.weather[0].main
      }
    )
  }
  
  function search() {
    const units = "imperial";
    const apiKey = "cfdab66ad524dca3797a910286a0542f";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(showTemperature); 
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weather.loaded) {
  return (
  <div className="Weather">
    <form className="search-engine" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <input 
            type="search" 
            placeholder="Enter a city..." 
            className="form-control"
            onChange={handleCityChange}
          />
        </div>
        <div className="col-3">
          <input 
            type="Submit" 
            value="Search" 
            className="btn btn-primary w-100"
          />
        </div>
      </div>
    </form>
    <WeatherData data={weather}/>
  </div>
  );  
  } else {
    search();
    return "Loading...";
  }
}