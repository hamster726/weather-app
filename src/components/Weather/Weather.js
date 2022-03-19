import { getCityLocation, getWeatherFromCity } from "../../api/weather-api";
import { useEffect, useState } from "react";
import {
  IconContainer,
  Icon,
  City,
  Time,
  Container,
  Info,
  FormSubmitButton,
  SearchCityContainer,
  Form,
  FormInput,
  CityList,
  CityItem,
} from "./style";
import iconMatching from "./IconMatching";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [cityList, setCityList] = useState(null);

  //initial effect
  useEffect(() => {
    getWeatherFromCity().then((res) => {
      setWeatherData(res);
    });
  }, []);

  useEffect(() => {
    if (inputValue.trim().length < 3) return;

    const timer = setTimeout(() => {
      getCityLocation(inputValue).then((e) => renderCityList(e));
    }, 250);

    return () => clearTimeout(timer);
  }, [inputValue]);

  if (!weatherData)
    return (
      <main>
        <Container>
          <LoadingSpinner />
        </Container>
      </main>
    );

  const updateWeatherCity = (e, data) => {
    if (e) e.preventDefault();

    const cityName = data ? data : inputValue;

    if (!cityName.trim()) {
      setInputValue("");
      return;
    }

    getWeatherFromCity(cityName).then((res) => setWeatherData(res));
    setCityList(null);
    setInputValue("");
  };

  const renderCityList = (res) => {
    console.log(res);
    if (!res || res.data < 1) return null;

    const cityItems = [...res.data];

    setCityList(
      <CityList>
        {cityItems.map((item, i) => {
          return (
            <CityItem
              key={i}
              onClick={(e) => updateWeatherCity(e, item.name)}
            >
              {`${item.name} (${item.country})`}
            </CityItem>
          );
        })}
      </CityList>
    );
  };

  return (
    <main>
      <Container>
        <City>{weatherData.city.toUpperCase()}</City>
        <Time>{weatherData.date}</Time>
        <IconContainer>
          <Icon>{iconMatching(weatherData.icon)}</Icon>
        </IconContainer>
        <Info>
          {weatherData.weather}, {weatherData.temp}°C
        </Info>
      </Container>
      <SearchCityContainer>
        <Form onSubmit={(e) => updateWeatherCity(e)}>
          <FormInput
            type={"text"}
            placeholder="Type your city"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <FormSubmitButton type={"submit"} value={"Search"} />
          {cityList}
        </Form>
      </SearchCityContainer>
      <div>for the week</div>
    </main>
  );
};

export default Weather;
