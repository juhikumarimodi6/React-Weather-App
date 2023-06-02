const GetGeoLocation = (setLatitude, setLongitude, latitude, longitude) => {
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

  export default GetGeoLocation;