const GetWeatherDetails = async (setLoading, latitude, longitude, setResult, setDay) => {
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

  export default GetWeatherDetails;