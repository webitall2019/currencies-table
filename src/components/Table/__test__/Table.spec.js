import { Provider } from "react-redux";
import { createStore } from "redux";
import { render } from "@testing-library/react";
import Table from "../Table";
import rootReducer from "../../../redux/rootReducer";

const renderRedux = (
  component,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe("Table with redux", () => {
  it("table render", () => {
    const { getByTestId } = renderRedux(<Table />, {
      initialState: {},
    });
    expect(getByTestId("table")).toBeInTheDocument();
  });
});
