import React  from 'react';
import Header from './Component/Header';
import TestData from './Component/TestData';
import WeatherDetails from './Component/WeatherDetails';
import HourlyForecast from './Component/HourlyForecast';
import AdditionalDetails from './Component/AdditionalDetails';
import './App.css';

function App() {

  const [result, setResult] = React.useState("")
  const [day, setDay] = React.useState();
  const [latitude, setLatitude] = React.useState()
  const [longitude, setLongitude] = React.useState()
  const [loading, setLoading] = React.useState(false)  

   const CityUrl = "http://api.openweathermap.org/geo/1.0/reverse?lat=" + latitude + "&lon=" + longitude + "&limit=1&appid=90a10e4ffd8bdfbff81c8fd659214773"

  let latitudeTest, longitudeTest;
  const getGeoLocation = () => {
    if (navigator.geolocation) {
      console.log("fetch coordinate start")
      navigator.geolocation.getCurrentPosition(
        (position) => {
          latitudeTest = position.coords.latitude;
          longitudeTest = position.coords.longitude;
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          console.log("latitude:" + latitude + latitudeTest + position.coords.latitude)
          console.log("longitude:" + longitude + longitudeTest + position.coords.longitude)
        }, 
        (error) => {
          console.error('Error getting current position:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
    console.log("fetch coordinate end")
  }

  const getWeatherDetails = async () => {
      // try {
          setLoading(true);
          console.log("inside get weather details")
    //   const url = "https://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=90a10e4ffd8bdfbff81c8fd659214773&units=metric&cnt=20"
    //   const response = await fetch(url);
    //   const data = await response.json()
    //   console.log(data)
    //   setResult(data);
    //   setDay(result.list[0].sys.pod === "d" ? "day" : "night")
    //   setLoading(false);
    // } catch (err) {
    //   console.log(err)
    //   setError(true)
    // }
    console.log("set result start")
     setResult(TestData)
     setLoading(false);

  }

  React.useEffect(() => {
    getGeoLocation();

    if(latitude && longitude) {
      getWeatherDetails();
    }
    if(result !== "") {
      setDay(result.list[0].sys.pod === "d" ? "day" : "night")
      console.log("day" + day + result.list[0].sys.pod === "d" ? "day" : "night")
    }
    
  }, [])

  return (
    <div className={day === "day" ? "app-container day-image" : "app-container night-image"} >
      {result !== ""  && latitude && longitude ? 
      <><Header 
        setLoading = {setLoading}
        day = {day}
        CityUrl = {CityUrl}
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
