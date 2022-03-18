import axios from "axios";

const API_KEY = "367e5fbca123e95ad06353b3f34833eb";
const _weatherApi = "https://api.openweathermap.org/data/2.5/weather";
const _locationApi = "https://api.openweathermap.org/geo/1.0/direct";

// just for example
// https://api.openweathermap.org/data/2.5/weather?lat=37.785834&lon=-122.406417&appid=367e5fbca123e95ad06353b3f34833eb

const getWeatherFromCoords = async (
  latitude = 50.06438222574136,
  longitude = 31.346369126996468,
  lang = "en"
) => {
  return await axios.get(
    `${_weatherApi}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&lang=${lang}`
  );
};

const getWeatherFromCity = async (city = "Kyiv", lang = "en") => {
  return await axios
    .get(`${_weatherApi}?q=${city}&appid=${API_KEY}&lang=${lang}&units=metric`)
    .then(res => _transformParams(res));
};

const getCityLocation = async (city = "Kyiv", lang = "en") => {
  return await axios.get(
    `${_locationApi}?q=${city}&limit=5&appid=${API_KEY}&lang=${lang}`
  );
};

const _transformParams = (res) => {
  // for example
  const transformParams = {
    city: "Kyiv",
    weather: "clouds",
    date: "date",
    temp: "5",
    icon: "03n",
  };

  const currentDate = new Date();

  transformParams.city = res.data.name;
  transformParams.weather = res.data.weather[0].main;
  transformParams.date = `${currentDate.getHours()}:${currentDate.getMinutes()} ${currentDate.toLocaleDateString()}`;
  transformParams.temp = Math.round(res.data.main.temp);
  transformParams.icon = res.data.weather[0].icon;

  return transformParams;
};

export { getWeatherFromCity };
