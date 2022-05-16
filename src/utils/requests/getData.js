import axios from "axios";
import { addData } from "../../redux/slice/weatherSlice";
import { store } from "../../redux/store/store";

export const getWeather = () => {
  const request = axios.get(
    "https://api.openweathermap.org/data/2.5/onecall?lat=47.00&lon=28.51&units=metric&appid=4ecb2d464e27186e0439780c1a26fac7"
  )
  .then(res => store.dispatch(addData(res.data)))
};