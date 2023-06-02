const GetLanLon = async (searchCity, setLatitude, setLongitude) => {
    try {
        const url = "https://api.openweathermap.org/geo/1.0/direct?q=" + searchCity + "&limit=1&appid=90a10e4ffd8bdfbff81c8fd659214773&units=metric"
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        console.log(data[0].lat);
        console.log(data[0].lon);
        setLatitude(data[0].lat);
        setLongitude(data[0].lon);
    } catch(err) {
        console.error("error occured" + err)
    }
}

export default GetLanLon;