import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const IconMatching = (icon) => {
  switch (icon) {
    case "01d":
      return <FontAwesomeIcon icon={solid("sun")} />;
    case "01n":
      return <FontAwesomeIcon icon={solid("moon")} />;
    case "02d":
      return <FontAwesomeIcon icon={solid("cloud-sun")} />;
    case "02n":
      return <FontAwesomeIcon icon={solid("cloud-moon")} />;
    case "03d":
    case "03n":
      return <FontAwesomeIcon icon={solid("cloud")} />;
    case "04d":
      return <FontAwesomeIcon icon={solid("cloud-sun")} />;
    case "04n":
      return <FontAwesomeIcon icon={solid("cloud-moon")} />;
    case "09d":
    case "09n":
      return <FontAwesomeIcon icon={solid("cloud-showers-heavy")} />;
    case "10d":
      return <FontAwesomeIcon icon={solid("cloud-sun-rain")} />;
    case "10n":
      return <FontAwesomeIcon icon={solid("cloud-moon-rain")} />;
    case "11d":
    case "11n":
      return <FontAwesomeIcon icon={solid("cloud-bolt")} />;
    case "13d":
    case "13n":
      return <FontAwesomeIcon icon={solid("snowflake")} />;
    case "50d":
    case "50n":
      return <FontAwesomeIcon icon={solid("smog")} />;
  }
};

export default IconMatching;
