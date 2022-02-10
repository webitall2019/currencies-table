import axios from "axios";
import { Iaction, Icurrencies } from "../types/types";

export const actionInit = (type: string, currencies: Icurrencies): Iaction => {
  return {
    type: type,
    payload: currencies,
  };
};

export const actionAddNewCurrency = (type: string, newCurrency: string) => {
  return async (dispath: any) => {
    try {
      await axios
        .get(
          `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${newCurrency}&tsyms=USD`
        )
        .then((res: any) => {
          if (res.data.Response === "Error") {
            alert("Nothing, try again");
            return;
          }
          dispath({ type: type, payload: res.data.DISPLAY });
          alert(`${newCurrency} was successfully added`);
        });
    } catch (error) {
      console.log(error);
    }
  };
};
