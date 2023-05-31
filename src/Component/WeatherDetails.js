import React from "react";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";
import './WeatherDetails.css'

const WeatherDetails = ({result}) => {

    const dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const date = new Date();
    const day = dayArr[date.getDay()];
    const description = result.list[0].weather[0].description
    var captitalize; 

    const getCapitalize = (description ) => {
        const words = description.split(" ");
        captitalize =  words.map((word, index) => {
                         return word[0].toUpperCase() + word.slice(1,word.length)
                        }).join(" ")
        return captitalize;
    }

    return (
        <div className="weather-container">
            <div className="day-date">{day}, {date.toString().slice(4,15)}.</div>
            <div className="temp">
                <b>{Math.round(result.list[0].main.temp)}<sup className="sup-degree">&deg;C</sup></b>
            </div>
            <div className="weather-description"><b>{getCapitalize(description )}</b></div>
            <div><FiArrowUp /> {result.list[0].main.temp_max}&deg;C &nbsp; <FiArrowDown /> {result.list[0].main.temp_min}&deg;C</div>
        </div>

    )
}

export default WeatherDetails;