import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import './WeatherForecast.css';
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function showForecast(response) {
    setForecast(response.data.daily)
    setLoaded(true);
  }

  if (loaded) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <WeatherForecastDay data={forecast[0]} />
        </div>  
      </div>  
    </div>
  );
  } else {
  const apiKey = "cfdab66ad524dca3797a910286a0542f";
  const units = "imperial";
  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  
  axios.get(apiUrl).then(showForecast);

  return null;
  }
}