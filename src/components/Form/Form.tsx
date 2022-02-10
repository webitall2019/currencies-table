import { ReactElement, useState } from "react";
import { useDispatch } from "react-redux";
import { actionAddNewCurrency } from "../../redux/actions-creators";

export default function Form(): ReactElement {
  const dispatch = useDispatch();
  const [newCurrency, setNewCurrency] = useState("");

  const setNewCurrencyHandler = (e: any) => {
    setNewCurrency(e.target.value.toUpperCase().trim());
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(actionAddNewCurrency("ADD_NEW_CURRENCY", newCurrency));
        setNewCurrency("");
      }}
      className="form"
    >
      <h2 aria-label="title" className="new-currency-title">
        {newCurrency}
      </h2>
      <input
        type="text"
        value={newCurrency}
        onChange={(e) => setNewCurrencyHandler(e)}
        id="newCoinInput"
        placeholder="abbreviation"
        aria-label="input"
      />
      <button className={!newCurrency ? "disabled" : "available"}>Add</button>
      <label htmlFor="newCoinInput">
        Please be sure you enter correct coin name
      </label>
    </form>
  );
}
