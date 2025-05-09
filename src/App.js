import React from 'react';
import './App.css';
import { CounterProvider } from './context/CounterContext';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import ToDo from './pages/ToDo';
function App() {
  return (
    <Router>
    <CounterProvider>
      <Routes>
        <Route
          path="/"
          element={
         <Home/>
          }
        />
        <Route
          path="/todo"
          element={
         <ToDo/>
          }
        />
      </Routes>
    </CounterProvider>
  </Router>

   
  );
}
export default App;
