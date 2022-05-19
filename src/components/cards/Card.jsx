import React from "react";
import './card.css';
import { useNavigate } from "react-router-dom";
import { convertDate } from "../../utils/functions/convertDate";

export const Card = ({ data }) => {
    let navigate = useNavigate();

    const date = convertDate(data.dt)
    const navigateToDetailedInfo = (time) => {
        navigate(`/daily/${time}`)
    }

    return (
        <div className="card" onClick={() => navigateToDetailedInfo(data.dt)}>
            <p className="date">{date}</p>
            <p className="temperature">Day: {Math.round(data.temp.day)} C</p>
            <p className="temperature">Night: {Math.round(data.temp.night)} C</p>
            <p className="description">{data.weather[0].description}</p>
        </div>
    )
}