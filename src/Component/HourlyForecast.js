import React from "react";
import './HourlyForecast.css'

const HourlyForecast = ({result, day}) => {

    return (
        <div className={day === "day"? "hourlyforecast-container day-color" : "hourlyforecast-container night-color"}>
            <div className="header-hourly">HOURLY FORECAST</div>
            <div className="hourly-temp">
                {result.list.map((Hourdata, index) => {
                        const url = 'https://openweathermap.org/img/wn/' + Hourdata.weather[0].icon + '@2x.png'
                        const hour = Hourdata.dt_txt.slice(11,13)
                        // const time = hour - 12;
                        const AmorPm = hour - 12 >= 0 ? "Pm" : "Am"
                        const hours = (hour % 12) || 12;
                        const finalTime = hours + AmorPm;
                        // const finalTime = hour - 12 >= 0 ? hour - 12 + "Pm" : hour - 0 + "Am"
                        return <div key = {index} className="hour">
                                    <div>{finalTime}</div>
                                    <img src = {url} alt = "icon" />
                                    <div>{Math.round(Hourdata.main.temp)}&deg;C</div>
                                </div>
                })}
            </div>
        </div>
    )
}

export default HourlyForecast;