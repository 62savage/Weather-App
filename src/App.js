import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherBox from "./components/WeatherBox";
import WeatherButton from "./components/WeatherButton";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const cities = ["paris", "new york", "tokyo", "seoul"];
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const handleCityChange = (city) => {
    if (city === "current") {
      setCity("");
    } else {
      setCity(city);
    }
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;
      let response = await fetch(url);
      let data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const getWeatherByCityName = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;
      let response = await fetch(url);
      let data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (city == "") {
      setLoading(true);
      getCurrentLocation();
    } else {
      setLoading(true);
      getWeatherByCityName();
    }
  }, [city]);

  return (
    <>
      {loading ? (
        <div className="container">
          <ClipLoader
            color="#f88c6b"
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : !error ? (
        <div className="container">
          <WeatherBox weather={weather} />
          <WeatherButton
            selectedCity={city}
            cities={cities}
            handleCityChange={handleCityChange}
          />
          <ClipLoader
            color="#f88c6b"
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        error
      )}
    </>
  );
}

export default App;
