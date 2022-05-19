import { createContext, useCallback, useState } from "react"
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { WeatherPage } from "../../pages/WeatherPage"
import { DayPage } from "../../pages/DayPage"
import { UsingReducer } from "../../pages/UsingReducer";


export const weatherContext = createContext({ dailyWeatherContext: [], setDailyWeatherContext: () => [] });

export const WeatherRoutes = () => {
    const [dailyWeatherContext, setDailyWeatherContext] = useState([]);
    const a = useCallback((b) => {
        setDailyWeatherContext(b)
    }, [dailyWeatherContext]);
    return (
        <weatherContext.Provider value={{ dailyWeatherContext, setDailyWeatherContext: a }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<WeatherPage />} />
                    <Route path={`/daily/:index`} element={<DayPage />} />
                    <Route path="/reducer" element={<UsingReducer/>} />
                </Routes>
            </BrowserRouter>
        </weatherContext.Provider>
    )
}