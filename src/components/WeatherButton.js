import React from "react";
import { Button } from "react-bootstrap";

export default function WeatherButton({ setCity, cities }) {
  return (
    <div>
      <Button variant="warning">Current Location</Button>
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
