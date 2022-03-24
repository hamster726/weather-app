import {
  IS_LOADING,
  CURRENT_THEME,
  CURRENT_CITY
} from "../types";

const isLoading = (value) => {
  return {
    type: IS_LOADING,
    payload: value
  }
};

const currentTheme = (value) => {
  return {
    type: CURRENT_THEME,
    payload: value
  }
};

const currentCity = (value) => {
  return {
    type: CURRENT_CITY,
    payload: value
  }
};


export {
  isLoading,
  currentTheme,
  currentCity
};
