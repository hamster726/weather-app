import {getWeatherFromCity} from "../../api/weather-api";
import {useEffect} from "react";

const Weather = () => {

  useEffect(() => {
    const weatherData = getWeatherFromCity().then(res => console.log(res.data));
  }, [])


  return (
    <main>
      <div>Weather widget</div>
    </main>
  );
};

export default Weather;
