import { useEffect, useState, useContext } from "react";
import { getWeather } from "../utils/requests/getData";
import { Card } from "../components/cards/Card";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./weatherPageStyle.css"
import { weatherContext } from "../utils/routes/Routes";

export const WeatherPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        getWeather();
    }, []);

    const weather = useSelector((state) => state.weatherData.initialWeatherData);

    const [dailyWeather, setDailyWeather] = useState([]);

    const { setDailyWeatherContext } = useContext(weatherContext);

    useEffect(() => {
        if (Object.keys(weather).length > 0) {
            setDailyWeather(weather.daily);
            setDailyWeatherContext(weather.daily);
        }
    }, [weather]);

    return (
        <div className="container">
            <div className="header">Weather</div>
            <div className="cardsContainer">
                <div className="location">{weather.timezone}</div>
                <div className="cards" >
                    {dailyWeather?.slice(0, 5).map((elem, index) => (
                        <Card data={elem} key={index} />
                    ))}
                </div>
            </div>
            <button className="button-to-reducer" onClick={() => navigate('/reducer')}>Go to useReducer</button>
        </div>
    )
}
