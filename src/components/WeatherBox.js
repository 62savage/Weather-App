import React from "react";

export default function WeatherBox({ weather }) {
  return (
    <div className="weather-box">
      <div>{weather?.name}</div>
      <h2>{weather?.main.temp}C/ 230 화씨</h2>
      <h3>{weather?.weather[0].description}</h3>
    </div>
  );
}
