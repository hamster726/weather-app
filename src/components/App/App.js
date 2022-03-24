import './App.css';
import {Provider} from "react-redux";
import store from "../../redux/store";
import Weather from "../Weather/Weather";
import {GlobalStyle, Global} from "./globalStyle";

function App() {
  return (
    <Provider store={store}>
      <Global/>
      <Weather/>
    </Provider>
  );
}

export default App;

