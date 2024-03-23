import { useEffect } from "react";
import "./App.css";

function App() {
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log(lat, lon);
    });
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return <div></div>;
}

export default App;
