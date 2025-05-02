import React, { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';
const Counter = () => {
    const {count, setCount} = useContext(CounterContext);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div>
            <span>Counter Component</span>
            <br />
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Counter;