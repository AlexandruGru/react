import React from "react";
import './card.css';

export const Card = ({ data }) => {

    const date = new Date(data.dt * 1000).toLocaleDateString("en-UK", { day: "numeric", year: "numeric", month: "short" })

    return (
        <div className="card">
            <p className="date">{date}</p>
            <p className="temperature">Daiy: {Math.round(data.temp.day)} C</p>
            <p className="temperature">Night: {Math.round(data.temp.night)} C</p>
            <p className="description">{data.weather[0].description}</p>
        </div>
    )
}