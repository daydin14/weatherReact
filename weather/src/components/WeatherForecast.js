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

const forecast = ({ img, conditions, time }) => {
  return (
    <div className="weather">
      <img src={img} alt="" />
      <p>{conditions}</p>
      <p>{time}</p>
    </div>
  );
};

export default forecast;
