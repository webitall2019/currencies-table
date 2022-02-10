import { Icurrencies, Iaction } from "../types/types";
import { INIT_APP, ADD_NEW_CURRENCY } from "../constants";

const initState: Icurrencies = {
  currencies: [],
};

const rootReducer = (state = initState, action: Iaction): Icurrencies => {
  switch (action.type) {
    case INIT_APP:
      return { ...state.currencies, ...action.payload };
    case ADD_NEW_CURRENCY:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export default rootReducer;
