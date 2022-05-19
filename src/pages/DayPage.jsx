import { useContext, useCallback } from "react";
import './DayPage.css'
import { useNavigate, useParams } from "react-router-dom";
import { weatherContext } from '../utils/routes/Routes'
import { convertDate } from '../utils/functions/convertDate';

export const DayPage = () => {

    const navigate = useNavigate();
    const params = useParams();

    const { dailyWeatherContext } = useContext(weatherContext);

    const data = dailyWeatherContext.filter((elem) => elem.dt === +params.index)[0]

    const date = convertDate(data)

    return (
        <div className="day-page-container">
            <div>{date}</div>
            <div>Day:{Math.round(data.temp.day)} C</div>
            <div>Night:{Math.round(data.temp.night)}C</div>
            <div>Min:{Math.round(data.temp.min)}C</div>
            <div>Max:{Math.round(data.temp.max)}C</div>
            <div>Wind:{Math.round(data.wind_speed)}M/S</div>
            <button onClick={() => navigate('/')}>back</button>
        </div>
    )
}
