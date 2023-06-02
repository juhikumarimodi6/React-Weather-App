import React  from 'react';
import Header from './Component/Header';
import TestData from './Component/TestData';
import WeatherDetails from './Component/WeatherDetails';
import HourlyForecast from './Component/HourlyForecast';
import AdditionalDetails from './Component/AdditionalDetails';
import './App.css';

function App() {

  const [input, setInput] = React.useState("")
  const [searchCity, setSearchCity] = React.useState()
  const [result, setResult] = React.useState("")
  const [day, setDay] = React.useState();
  const [latitude, setLatitude] = React.useState(0)
  const [longitude, setLongitude] = React.useState(0)
  const [loading, setLoading] = React.useState(false)  

   const CityUrl = "http://api.openweathermap.org/geo/1.0/reverse?lat=" + latitude + "&lon=" + longitude + "&limit=1&appid=90a10e4ffd8bdfbff81c8fd659214773"

  const getGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          console.log("Latitude: " + latitude)
          console.log("Longitude: " + longitude)
        }, 
        (error) => {
          console.error('Error getting current position:', error);
        }
      );
    } else {
    }
  }

  const getWeatherDetails = async () => {
    try {
      console.log("inside getWeather details")
      setLoading(true);
      const url = "https://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=90a10e4ffd8bdfbff81c8fd659214773&units=metric&cnt=20"
      const response = await fetch(url);
      const data = await response.json()
      // const data = TestData;
      console.log(data)
      setResult(data);
      setDay((data.list[0].sys.pod === "d" )? "day" : "night")
      setLoading(false);
    } catch(error) {
      console.error("error occured" + error)
    }
  }

  React.useEffect(() => {
    getGeoLocation();
    if(latitude && longitude) {
      getWeatherDetails();
    }
  }, [latitude, longitude])

  return (
    <div className={day === "day" ? "app-container day-image" : "app-container night-image"} >
      {result !== ""  && latitude && longitude ? 
      <><Header 
        setLoading = {setLoading}
        day = {day}
        CityUrl = {CityUrl}
        input = {input}
        setInput = {setInput}
        setSearchCity = {setSearchCity}
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