import React from "react";
import { Button } from "react-bootstrap";

export default function WeatherButton({ setWeather, cities }) {
  return (
    <>
      <Button variant="warning">Current Location</Button>
      {cities.map((city) => (
        <Button variant="warning">{city}</Button>
      ))}
    </>
  );
}
