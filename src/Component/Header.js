import React from "react";
// import CityApiTestData from "./CityApiTestData";
import SearchBar from './SearchBar'
import './Header.css'


const Header = ({setLoading, day, input, setInput, setSearchCity, latitude, longitude}) => {

    let name, state, country;
    const [city, setCity] = React.useState("")

    const getCityName = async () => {
        setLoading(true);
        const CityUrl = "http://api.openweathermap.org/geo/1.0/reverse?lat=" + latitude + "&lon=" + longitude + "&limit=1&appid=90a10e4ffd8bdfbff81c8fd659214773"
        const response = await fetch(CityUrl)
        const data = await response.json()
        // const data = CityApiTestData;
        setLoading(false);
        console.log(data)
        name = data[0].name;
        state = data[0].state;
        country = data[0].country;
        setCity(`${name} (${state}) - ${country}`);
    }

    React.useEffect(() => {
        getCityName();
    }, [latitude, longitude])
    

    return (
        <div className={day === "day" ? "header-container day-color" : "header-container night-color"}>
            <h1 className="header">{city}</h1>
            <SearchBar 
                input = {input}
                setInput = {setInput}
                setSearchCity = {setSearchCity}
            />
        </div>
    )
}

export default Header;