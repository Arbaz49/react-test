import React, { useState } from 'react';
import CustomTextField from '../components/TextField';
import Counter, { CustomBtn } from '../components/Counter';
import PageLayout from '../HOC/PageLayout';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../Redux/slices/CounterSlice';
const Home = () => {
  const [value, setValue] = useState("");
  const counter = useSelector((state) => {
    console.log(JSON.stringify(state.CounterReducer.value))
    return state.CounterReducer.value
  })
  const dispatch = useDispatch();
  console.log(counter)
  return (
    <div style={{ boxSizing: "border-box", }}>
      <div
        testId="app"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "50vh",
          width: "100%",
        }}
      >
        <span>React Test</span>
        <CustomTextField
          placeholder="Enter text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
        />
        <Counter />
      </div>

      <div className="reduxCounter"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <span>Redux Counter-with Redux Toolkit</span>
        <h2>{"Redux Counter- "}{counter}</h2>

        <div style={{ display: "flex", gap: "10px" }}>
          <CustomBtn
            onClick={() => {
              dispatch(increment())
            }}
          >
            Increment
          </CustomBtn>
          <CustomBtn onClick={() => {
            dispatch(decrement())
          }} >
            Decrement
          </CustomBtn>
        </div>

      </div>
    </div>
  );
};

export default PageLayout(Home);