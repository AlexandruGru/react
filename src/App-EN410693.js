import React, { useEffect, useState } from "react";
import "./app.css";
import { getWeather } from "./utils/requests/getData";
import { Card } from "./cards/Card";
import { useSelector } from "react-redux";

function App() {
  useEffect(() => {
    getWeather();
  }, []);
  const test = useSelector((state) => state.weatherData.initialWeatherData);

  const [flag, setFlag] = useState(false);
  if (test.length > 0) {
    setFlag(true)
  }
  console.log(flag)
  if (flag) {
    setWeather(test)
  }
  const [weather, setWeather] = useState([]);

  // useEffect(() => {
  //   if(test.length !== 0 ) {
  //     setWeather(test);
  //   }
  // }, test);

  // console.log("weather", weather);
  console.log("test", test);
  return (
    <div className="app">
      <div className="container">
        <div className="header">Weather</div>
        <div className="cardsContainer">
          <div className="location">location</div>
          {/* <p>{weather}</p> */}
          {/* <div className="cards">{weather.map((elem) => {<Card data={elem}/>})}</div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
