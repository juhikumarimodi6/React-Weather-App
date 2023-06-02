import React  from 'react';
import Header from './Component/Header';
import TestData from './Component/TestData';
import WeatherDetails from './Component/WeatherDetails';
import HourlyForecast from './Component/HourlyForecast';
import AdditionalDetails from './Component/AdditionalDetails';
import GetGeoLocation from './Component/GetGeoLocation';
import GetLanLon from './Component/GetLanLon';
import GetWeatherDetails from './Component/GetWeatherDetails';
import './App.css';

function App() {

  const [input, setInput] = React.useState("")
  const [searchCity, setSearchCity] = React.useState()
  const [result, setResult] = React.useState("")
  const [day, setDay] = React.useState();
  const [latitude, setLatitude] = React.useState(0)
  const [longitude, setLongitude] = React.useState(0)
  const [loading, setLoading] = React.useState(false)  

  const getGeoLocation = () => searchCity ? GetLanLon(searchCity, setLatitude, setLongitude) 
                                            : GetGeoLocation(setLatitude, setLongitude, latitude, longitude) ;

  const getWeatherDetails = () => GetWeatherDetails(setLoading, latitude, longitude, setResult, setDay);

  React.useEffect(() => {
    getGeoLocation();
    if(latitude && longitude) {
      getWeatherDetails();
    }
  }, [latitude, longitude, searchCity])

  return (
    <div className={day === "day" ? "app-container day-image" : "app-container night-image"} >
      {result !== ""  && latitude && longitude ? 
      <><Header 
        setLoading = {setLoading}
        day = {day}
        input = {input}
        setInput = {setInput}
        setSearchCity = {setSearchCity}
        latitude={latitude}
        longitude={longitude}
      />
      <WeatherDetails 
        result = {result}
      />
      <HourlyForecast
        result = {result}
        day = {day}
      /> 
      <AdditionalDetails 
        result = {result}
        day = {day}
      /></>: <div className='loading'>Fetching data, Loading...</div> }
    </div>
  );
}

export default App;