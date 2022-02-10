import { useEffect } from "react";
import axios from "axios";
import "./App.css";
import { useDispatch } from "react-redux";
import { actionInit } from "./redux/actions-creators";
import Table from "./components/Table/Table";
import Form from "./components/Form/Form";

function App() {
  const dispatch = useDispatch();

  const fetchCoins = async () => {
    try {
      const response = await axios
        .get(
          `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,LUNA,BNB,SOL,AXS,MANA,SAND,BUSD,ADA,XRP
         &tsyms=USD`
        )
        .then((res) => res.data.DISPLAY);

      dispatch(actionInit("INIT", response));
    } catch (error) {
      throw new Error("error" + error);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <div className="App">
      <Form />
      <Table />
    </div>
  );
}

export default App;
