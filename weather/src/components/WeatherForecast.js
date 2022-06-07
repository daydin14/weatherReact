import React from "react";
const WeatherForecast = (props) => {
  return (
    <div className="weather">
      <img src={props.img} alt="" />
      <p>conditions: {props.conditions}</p>
      <p>time: {props.time}</p>
    </div>
  );
};
export default WeatherForecast;
