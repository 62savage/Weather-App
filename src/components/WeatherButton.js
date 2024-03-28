import React from "react";
import { Button } from "react-bootstrap";

export default function WeatherButton({ setCity, cities, handleCityChange }) {
  return (
    <div>
      <Button variant="warning" onClick={() => handleCityChange("current")}>
        Current Location
      </Button>
      {cities.map((city, index) => (
        <Button
          variant="warning"
          key={index}
          onClick={() => {
            setCity(city);
          }}
        >
          {city}
        </Button>
      ))}
    </div>
  );
}
