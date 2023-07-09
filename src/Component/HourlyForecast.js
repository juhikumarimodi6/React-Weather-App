import React from "react";
import { useGlobalStateContext } from "../Context/StateProvider";
import './HourlyForecast.css'

const HourlyForecast = () => {
    const {result, day} = useGlobalStateContext();
    return (
        <div className={day === "day"? "hourlyforecast-container day-color" : "hourlyforecast-container night-color"}>
            <div className="header-hourly">HOURLY FORECAST</div>
            <div className="hourly-temp">
                {result.list.map((Hourdata, index) => {
                        const url = 'https://openweathermap.org/img/wn/' + Hourdata.weather[0].icon + '@2x.png'
                        const hour = Hourdata.dt_txt.slice(11,13)
                        const AmorPm = hour - 12 >= 0 ? "Pm" : "Am"
                        const hours = (hour % 12) || 12;
                        const finalTime = hours + AmorPm;
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