import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Details, MyList, PokeList, Catch, GenerationList } from "./pages";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/details/:pokemonID" element={<Details />} />
        <Route path="/details/my/:myPokemonID" element={<Details />} />
        <Route path="/list" element={<GenerationList />} />
        <Route path="/myList" element={<MyList />} />
        <Route path="/list/gen/:gen" element={<PokeList />} />
        <Route path="/catch" element={<Catch />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
