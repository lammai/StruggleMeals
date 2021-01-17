import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import About from "./components/About";

import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
// import Counter from './components/counter';
// import Card from "./components/cardDesign";
import Card from "./components/cards"
import Header from './components/common/header/Header';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const Home = () => (
    <div>
        <Header/>
        <Card />
    </div>
);

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Switch>
            <Route path={"/about-us"} component={About}/>
            <Route path={"/"} component={Home}/>
          </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

