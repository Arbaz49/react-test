import React,  { useReducer } from "react";
import PageLayout from "../HOC/PageLayout";

const initialState = { count: 0 };

const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count - 1 };
      case "RESET":
        return initialState;
      default:
        return state;
    }
  };

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "center", height: "50vh", width: "100%" }}>

        <h1>useReducer Hook</h1>

      <h2>Counter: {state.count}</h2>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </div>

        </div>
    )
}

export default PageLayout(UseReducer);