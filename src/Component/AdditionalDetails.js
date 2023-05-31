import React from "react";
import './AdditionalDetails.css'

const AdditionalDetails = ({result, day}) => {

    let sunrise = result.city.sunrise * 1000 + 198000000;
    let sunset = result.city.sunset * 1000 + 198000000;

    const getTime = (timeStamp) => {
        let date = new Date(timeStamp);
        let hours = date.getUTCHours().toString().padStart(2,0)
        let minutes = date.getUTCMinutes().toString().padStart(2,0)
        let seconds = date.getUTCSeconds().toString().padStart(2,0)
        if(hours > 12) {
            hours = hours - 12 ;
        }
        console.log(hours + ':' + minutes + ':' + seconds)
        return hours + ":" + minutes;
    }

    return (
        <div className={day === "day" ? "AdditionalDetails-container day-color" : "AdditionalDetails-container night-color"}>
            <div className="header-details">DETAILS</div>
            <div className="details-container">
                <div className="details">
                    <div className="detail"> Sunrise</div>
                    <div className="number">{getTime(sunrise)}am</div>
                </div>
                <div className="details">
                    <div className="detail">Sunset</div>
                    <div className="number">{getTime(sunset)}pm</div>
                </div>
                <div className="details">
                    <div className="detail">Pressure</div>
                    <div className="number">{result.list[0].main.pressure}hPa</div>
                </div>
                <div className="details">
                    <div className="detail">Visibility</div>
                    <div className="number">{(result.list[0].visibility)/1000}Km</div>
                </div>
                <div className="details">
                    <div className="detail">Humidity</div>
                    <div className="number">{result.list[0].main.humidity}%</div>
                </div>
                <div className="details">
                    <div className="detail">Wind</div>
                    <div className="number">{result.list[0].wind.speed}m/s</div>
                </div>
                <div className="details">
                    <div className="detail">Cloud Cover</div>
                    <div className="number">{result.list[0].clouds.all}%</div>
                </div>
                <div className="details">
                    <div className="detail">Precipitation</div>
                    <div className="number">{result.list[0].pop * 100}%</div>
                </div>
            </div>
        </div>
    )
}

export default AdditionalDetails;