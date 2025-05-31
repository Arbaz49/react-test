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
import Pagination from './pages/Pagination';
import Search from './pages/Search';
import UseReducer from './pages/UseReducerCounter';


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
         <Route
          path="/pagination"
          element={
         <Pagination/>
          }
        />
         <Route
          path="/search"
          element={
         <Search/>
          }
        />
           <Route
          path="/counter-usereducer"
          element={
         <UseReducer/>
          }
        />
      </Routes>
    </CounterProvider>
  </Router>

   
  );
}
export default App;
