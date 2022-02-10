import { GridColDef } from "@mui/x-data-grid";

const useColumns = (): GridColDef[] => {
  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Coin Name",
      flex: 150,
      align: "center",
      headerAlign: "center",
      headerClassName: "table__headerBg-color",
    },
    {
      field: "curPrice",
      headerName: `Current Price (USD)`,
      flex: 200,
      align: "center",
      headerAlign: "center",
      headerClassName: "table__headerBg-color",
    },
    {
      field: "openPrice",
      headerName: "Opening price (USD)",
      flex: 200,
      align: "center",
      headerAlign: "center",
      headerClassName: "table__headerBg-color",
    },
    {
      field: "priceIncrease",
      headerName: "Price Increase ⬇",
      flex: 200,
      align: "center",
      headerAlign: "center",
      headerClassName: "table__headerBg-color",
    },
  ];
  return columns;
}
export default useColumns;