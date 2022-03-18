import axios from "axios";

const lang = 'ua';
const API_KEY = '367e5fbca123e95ad06353b3f34833eb';
const _weatherApi = 'https://api.openweathermap.org/data/2.5/weather';
const _locationApi = 'https://api.openweathermap.org/geo/1.0/direct';

//https://api.openweathermap.org/data/2.5/weather?lat=37.785834&lon=-122.406417&appid=367e5fbca123e95ad06353b3f34833eb

const getWeatherFromCoords = async (latitude = 50.06438222574136, longitude = 31.346369126996468) => {
  return await axios.get(`${_weatherApi}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&lang=${lang}`);
}

const getWeatherFromCity = async (city = 'Kyiv') => {
  return await axios.get(`${_weatherApi}?q=${city}&appid=${API_KEY}&lang=${lang}`);
}

const getCityLocation = async (city = 'Kyiv') => {
  return await axios.get(`${_locationApi}?q=${city}&limit=5&appid=${API_KEY}&lang=${lang}`)
}

export {
  getWeatherFromCoords,
  getWeatherFromCity,
  getCityLocation
}
