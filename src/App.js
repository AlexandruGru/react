import React, { useEffect, useState } from "react";
import "./app.css";
import { getWeather } from "./utils/requests/getData";
import { Card } from "./cards/Card";
import { useSelector } from "react-redux";

function App() {
  useEffect(() => {
    getWeather();
  }, []);

  const weather = useSelector((state) => state.weatherData.initialWeatherData);
  const dailyWeather = weather.daily;
  console.log(dailyWeather)
  return (
    <div className="app">
      <div className="container">
        <div className="header">Weather</div>
        <div className="cardsContainer">
          <div className="location">{weather.timezone}</div>
          <div className="cards">
            {dailyWeather?.slice(0, 5).map((elem, index) => (
              <Card data={elem} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
