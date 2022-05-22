import React from "react";
import WeatherIcon from "./WeatherIcon";
import './WeatherForecast.css';
import axios from "axios";

export default function WeatherForecast(props) {
  function showForecast(response) {
    console.log(response.data)
  }

  const apiKey = "cfdab66ad524dca3797a910286a0542f";
  const units = "imperial";
  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showForecast)

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-days">Thu</div>
          <WeatherIcon code="01d" size={36}/>
          <div className="forecast-temperatures">
            <span className="max-temp">19</span>
            <span className="min-temp">10</span>
          </div>
        </div>  
      </div>  
    </div>
  );
}