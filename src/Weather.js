import React, {useState} from "react";
import axios from "axios";
import './Weather.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Weather() {
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");

  function showTemperature(response) {
    console.log(response.data);
    setLoaded(true);
  }

  if (loaded) {
  return (
  <div className="Weather">
    <form className="search-engine">
      <div className="row">
        <div className="col-9">
          <input 
            type="search" 
            placeholder="Enter a city..." 
            className="form-control"
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
    <h1>New York</h1>
    <ul>
      <li>Wednesday 7:00</li>
      <li>{weather.description}</li>
    </ul>
    <div className="row mt-3">
      <div className="col-6">
        <div className="clearfix">
          <img 
          src="{weather.icon}" 
          alt="Mostly Cloudy"
          className="float-left"
          />
          <span className="float-left">
            <span className="temperature">{}</span>
            <span className="unit">°C</span>  
          </span>
        </div>
      </div>
      <div className="col-6">
        <ul>
          <li>Precipitation: 15%</li>
          <li>Humidity: %</li>
          <li>Wind: mph</li>
        </ul>
      </div>
    </div>
  </div>
  );  
  } else {
      const units = "imperial";
      const apiKey = "cfdab66ad524dca3797a910286a0542f";
      let city = "New York";
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
      axios.get(url).then(showTemperature);

      return "Loading";
  }
}









  /* const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    let units = `imperial`;
    let apiKey = `cfdab66ad524dca3797a910286a0542f`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(showTemperature);
  }

  function showTemperature(response) {
    setLoaded(true);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit} className="search-engine">
      <input type="search" placeholder="Enter a city" onChange={updateCity} />
      <button type="Submit">Search</button>
    </form>
  );

  if (loaded) {
    return (
      <div className="Weather">
        {form}
        <ul>
          <li>Temperature: {weather.temperature}°F</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}mph</li>
          <li>
            <img src={weather.icon} alt="Weather Icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }*/
