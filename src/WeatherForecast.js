import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import './WeatherForecast.css';
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false)
  },
    [props.coordinates]
  );

  function showForecast(response) {
    setForecast(response.data.daily)
    setLoaded(true);
  }

  function load() {
    const apiKey = "cfdab66ad524dca3797a910286a0542f";
    const units = "imperial";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  
    axios.get(apiUrl).then(showForecast);
  }

  if (loaded) {
  return (
    <div className="WeatherForecast">
      <div className="row"> 
        {forecast.map(function(dailyForecast, index){
          if (index < 5) {
            return(
          <div className="col" key={index}>
            <WeatherForecastDay data={dailyForecast}/>
          </div>
            );
          } else {
            return null;
          }
        })}  
      </div>  
    </div>
  );
  } else {
  load();
  
  return null;
  }
}