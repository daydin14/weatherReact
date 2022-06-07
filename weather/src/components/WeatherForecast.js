import React from "react";
import weatherData from "../weatherData";
const WeatherForecast = (props) => {
  return (
    <div>
      <img src={props.img} />
      conditions={props.conditions}
      time={props.time}
    </div>
  );
};
export default WeatherForecast;
