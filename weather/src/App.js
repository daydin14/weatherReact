import React from "react";
import "./styles.css";

import WeatherForecast from "./components/WeatherForecast";
import weather from "./weatherData";

export default function App() {
  const forecasts = weather.map((ele, index) => {
    return <WeatherForecast {...ele} key={index} />;
  });

  return (
    <div className="App">
      <h1>My WeatherIcons App</h1>
      <section className="weather">{forecasts}</section>
    </div>
  );
}
