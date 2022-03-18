import './App.css';
import {Provider} from "react-redux";
import store from "../../redux/store";
import Weather from "../Weather/Weather";
import {getCityLocation, getWeatherFromCity} from "../../api/weather-api";

function App() {
  return (
    <Provider store={store}>
      <Weather/>
    </Provider>
  );
}

export default App;

