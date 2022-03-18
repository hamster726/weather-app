import { getWeatherFromCity } from "../../api/weather-api";
import { useEffect, useState } from "react";
import {
  Header,
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
} from "./style";
import iconMatching from "./iconMatching";

const Weather = () => {

  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    getWeatherFromCity().then((res) => {setWeatherData(res)});
  }, []);

  if (!weatherData) return (<>LOADING. OK?</>)

  return (
    <main>
      <Container>
        <City>{weatherData.city.toUpperCase()}</City>
        <Time>{weatherData.date}</Time>
        <IconContainer>
          <Icon>
            {iconMatching(weatherData.icon)}
          </Icon>
        </IconContainer>
        <Info>
          {weatherData.weather}, {weatherData.temp}°C
        </Info>
      </Container>
      <SearchCityContainer>
        <Form>
          <FormInput type={"text"} placeholder="Type your city" />
          <FormSubmitButton type={"submit"} value={"Search"} />
        </Form>
      </SearchCityContainer>
      <div>for the week</div>
    </main>
  );
};

export default Weather;
