import React, { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';
import { styled } from '@mui/material';
const Counter = () => {
    const {count, setCount} = useContext(CounterContext);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div>
            <span>Counter Component- with context API</span>
            <br />
            <h1>Counter: {count}</h1>
            <div style={{ display: "flex", gap: "10px" }}>
                <CustomBtn onClick={increment}>Increment</CustomBtn>
                <CustomBtn onClick={decrement}>Decrement</CustomBtn>
            </div>

        </div>
    );
};


export const CustomBtn=styled("button")(()=>{
    return {
        width: "100px",
        height: "44px",
        backgroundColor: "blue",
        color: "white",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        fontSize: "16px",
        "&:hover": {
            backgroundColor: "#5a5ad3"
        }
    }
})
export default Counter;