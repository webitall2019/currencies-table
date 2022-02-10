import { useSelector } from "react-redux";
import { GridRowsProp } from "@mui/x-data-grid";

const useRows = (): any => {
  const store = useSelector((state) => Object.entries(state));
  const rows: GridRowsProp = store.map((coin) => {
    return {
      id: `${coin[0]}`,
      name: `${coin[0]}`,
      curPrice: `${coin[1].USD?.PRICE}`,
      openPrice: `${coin[1].USD?.OPENDAY}`,
      priceIncrease: `${coin[1].USD?.CHANGE24HOUR}`,
    };
  });
  return rows;
};

export default useRows;
