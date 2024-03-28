import React from "react";
import { Button } from "react-bootstrap";

export default function WeatherButton({
  cities,
  handleCityChange,
  selectedCity,
}) {
  return (
    <div>
      <Button
        variant={`${selectedCity == "" ? "outline-warning" : "warning"}`}
        onClick={() => handleCityChange("current")}
      >
        Current Location
      </Button>
      {cities.map((city, index) => (
        <Button
          variant={`${city == selectedCity ? "outline-warning" : "warning"}`}
          key={index}
          onClick={() => {
            handleCityChange(city);
          }}
        >
          {city}
        </Button>
      ))}
    </div>
  );
}
