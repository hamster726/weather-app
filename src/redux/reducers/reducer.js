import { IS_LOADING, CURRENT_THEME, CURRENT_CITY } from "../types";
import { isLoading, currentTheme, currentCity } from "../actions/actions";

// const themes = {
//   morning: {
//     background: "linear-gradient(#00bbff, #d2f5ae)",
//     color: "#0e1950",
//   },
//   day: {
//     background: "linear-gradient(#e1e80d, #ff9900)",
//     color: "#eeeeee",
//   },
//   evening: {
//     background: "linear-gradient(360deg, #facf62, #e6756f, #884186)",
//     color: "#333333",
//   },
//   night: {
//     background: "linear-gradient(45deg, #111642, #2d729f)",
//     color: "#CDD5C1",
//   },
//   test: {
//     background: "linear-gradient(#00bbff, #d2f5ae,#e1e80d, #ff9900,#facf62, #e6756f, #884186,#111642, #2d729f)",
//     color: "#CDD5C1",
//   }
// };

const themes = {
  morning: { backgroundOffset: 0, color: "#00000099" },
  day: { backgroundOffset: 33, color: "#00000099" },
  evening: { backgroundOffset: 75, color: "#00000099" },
  night: { backgroundOffset: 100, color: "#eeeeee90" },
};

const initialState = {
  city: [],
  theme: themes.night,
  isLoading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_THEME: {
      const time = action.payload;

      switch (time) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          return { ...state, theme: themes.night };
        case 6:
        case 7:
        case 8:
        case 9:
          return { ...state, theme: themes.morning };
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
          return { ...state, theme: themes.day };
        case 19:
        case 20:
        case 21:
          return { ...state, theme: themes.evening };
        case 22:
        case 23:
        case 24:
          return { ...state, theme: themes.night };
      }
    }

    // for example

    // case ADD_TO_CART: {
    //   const cartCopy = Object.assign({}, state.cart);
    //   const pizzaCopy = Object.assign({}, action.payload);
    //   const pizzaKey = `${pizzaCopy.key}-${pizzaCopy.dough}-${pizzaCopy.size}`;
    //
    //   if (Object.keys(cartCopy).includes(pizzaKey)) {
    //     pizzaCopy.quantity = cartCopy[pizzaKey].quantity + 1;
    //   } else {
    //     pizzaCopy.quantity = 1;
    //   }
    //
    //   cartCopy[pizzaKey] = pizzaCopy;
    //
    //   return {
    //     ...state,
    //     cart: cartCopy,
    //   };
    // }
    default:
      console.log("default dispatch", action);
      return {
        ...state,
      };
  }
};

// THUNK ABOUT IT

// export const loadCatalog = () => async (dispatch) => {
//   dispatch(isLoading(true));
//   await getCatalogAPI()
//     .then((res) => {
//       dispatch(getCatalog(res.data));
//       dispatch(isLoading(false));
//     })
//     .catch((e) => {
//       console.error("Не удается получить данные", e);
//       setTimeout(() => loadCatalog()(dispatch), 2000); // Добавить до 5 попыток или кнопку "Попробовать снова"
//     });
// };

export default reducer;
