import React from "react";
import "./styles.css";
import Weather from "./weatherData";

export default function App() {
  const weather = Weather.map((ele, index) => {
    return <WeatherForecast {...ele} key={index} />;
  });

  return (
    <div className="App">
      <h1>My WeatherIcons App</h1>
    </div>
  );
}
