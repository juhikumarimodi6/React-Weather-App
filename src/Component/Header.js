import React from "react";
import CityApiTestData from "./CityApiTestData";
import './Header.css'


const Header = ({CityUrl, setLoading, day}) => {

    // const Latitude = 18.5620072;
    // const Longitude = 73.7708962;
    let name, state, country;
    const [city, setCity] = React.useState("")

    const getCityName = async () => {
        setLoading(true);
        // const response = await fetch(CityUrl)
        // const data = await response.json()
        const data = CityApiTestData;
        setLoading(false);
        console.log(data)
        name = data[0].name;
        state = data[0].state;
        country = data[0].country;
        setCity(`${name} (${state}) - ${country}`);
    }

    React.useEffect(() => {
        getCityName();
    }, [])
    

    return (
        <div className={day === "day" ? "header-container day-color" : "header-container night-color"}>
            <h1 className="header">{city}</h1>
        </div>

    )
}

export default Header;