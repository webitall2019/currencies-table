import { fireEvent, render, screen } from "@testing-library/react";
import Form from "../Form";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../../redux/rootReducer";

const renderWithRedux = (
  component,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe("Form component", () => {
  it("test input value, to be displayed exactly as expected", () => {
    const { getByLabelText } = renderWithRedux(<Form />, {
      initialState: {},
    });
    const input = getByLabelText("input");
    fireEvent.change(input, {
      target: { value: "value was changed" },
    });

    expect(input.value).toBe("value was changed".toUpperCase());
  });
  it("button test", () => {
    const { getByLabelText } = renderWithRedux(<Form />, {
      initialState: {},
    });
    const input = getByLabelText("input");
    const button = screen.getByText(/Add/);
    expect(button).toHaveClass("disabled");
    fireEvent.change(input, {
      target: { value: "test" },
    });
    expect(button).toHaveClass("available");
  });
});
