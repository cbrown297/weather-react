import React from "react";
import axios from "axios";

export default function Weather() {
    let apiKey=`cfdab66ad524dca3797a910286a0542f`
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${apiKey}&units=imperial`
    axios.get(apiUrl).then(handleResponse)

    function handleResponse(response) {
        console.log(response.data)
        alert(`The temperature in Paris is ${Math.round(response.data.main.temp)}°F`);
    }

    return (
        <div className="Weather">
            <h1>Hello World</h1>
        </div>
    );
}