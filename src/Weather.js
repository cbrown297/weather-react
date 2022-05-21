import React, {useState} from "react";
import axios from "axios";
import './Weather.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Weather(props) {
  const [weather, setWeather] = useState({loaded: false});

  function showTemperature(response) {
    setWeather(
      {
        loaded: true,
        city: response.data.name,
        date: "Wednesday 7:00",
        temperature: Math.round(response.data.main.temp),
        humidity: response.data.main.humidity,
        wind: Math.round(response.data.wind.speed),
        description: response.data.weather[0].description,
        icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        alt: response.data.weather[0].main
      }
    )
  }

  if (weather.loaded) {
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
    <h1>{weather.city}</h1>
    <ul>
      <li>{weather.date}</li>
      <li className="text-capitalize">{weather.description}</li>
    </ul>
    <div className="row mt-3">
      <div className="col-6">
        <div className="clearfix">
          <img 
          src={weather.icon} 
          alt={weather.alt}
          className="float-left"
          />
          <span className="float-left">
            <span className="temperature">{weather.temperature}</span>
            <span className="unit">°C</span>  
          </span>
        </div>
      </div>
      <div className="col-6">
        <ul>
          <li>Precipitation: 15%</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}mph</li>
        </ul>
      </div>
    </div>
  </div>
  );  
  } else {
      const units = "imperial";
      const apiKey = "cfdab66ad524dca3797a910286a0542f";
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
      axios.get(url).then(showTemperature); 

      return "Loading...";
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
