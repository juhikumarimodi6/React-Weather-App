import React  from 'react';
import Header from './Component/Header';
import TestData from './Component/TestData';
import WeatherDetails from './Component/WeatherDetails';
import HourlyForecast from './Component/HourlyForecast';
import AdditionalDetails from './Component/AdditionalDetails';
import GetGeoLocation from './Component/GetGeoLocation';
import GetLanLon from './Component/GetLanLon';
import GetWeatherDetails from './Component/GetWeatherDetails';
import { useGlobalStateContext } from './Context/StateProvider';
import './App.css';

function App() {

  const {searchCity, result, setResult, day, setDay, latitude, setLatitude, longitude, setLongitude, setLoading} = useGlobalStateContext();

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
      <>
        <Header />
        <WeatherDetails />
        <HourlyForecast /> 
        <AdditionalDetails />
      </>
      : <div className='loading'>Fetching data, Loading...</div> }
    </div>
  );
}

export default App;