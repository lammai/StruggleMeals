import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
// import Counter from './components/counter';
// import Card from "./components/cardDesign";
import Card from "./components/cards"
import Header from './components/common/header/Header';
import About from "./components/About";

ReactDOM.render(
  <React.StrictMode>
      <Header />
      <Card />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

