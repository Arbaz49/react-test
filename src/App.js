import React, { useState } from 'react';
import './App.css';
import TextField from './components/TextField';
import Counter from './components/Counter';
import {CounterProvider} from './context/CounterContext';

function App() {
  const [value, setValue] = useState("");
  return (
 <CounterProvider>
  <div 
  testId="app"
   style={{display: "flex", flexDirection: "column", alignItems: "center",justifyContent:"center", height: "100vh",width:"100%"}}
  >

<span>
React Test 1
</span>
<TextField
  placeholder="Enter text"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  type="text"
/>
<Counter/>
</div>

 </CounterProvider>
  );
}

export default App;
