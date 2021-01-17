import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
// import Card from "./components/cardDesign";
import Card from "./components/cards"
import './App.css';
import Slider from 'rc-slider';
import "rc-slider/assets/index.css";
import './components/slider-style.css'
import Header from './components/common/header/Header';
import About from "./components/About";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "./button-styles.css";
import { Button } from "./components/Button";

const Home = () => (
    <div>
        <p className="budget text-center">
            Choose your budget
        </p>
        <Slider defaultValue = {50}
                max = {4}
                step = {null}
                marks = {mark}
                valueLabelDisplay="auto"
                onCharge={getValue}/>

        <Button
            onClick={() => {
                console.log("Yummy Breakfast");
            }}
            type="button"
            buttonStyle="btn--primary--outline"
            buttonSize="btn--large"
        >
            Breakfast
        </Button>

        <Button
            onClick={() => {
                console.log("Healthy Lunch");
            }}
            type="button"
            buttonStyle="btn--primary--outline"
            buttonSize="btn--large"
        >
            Lunch
        </Button>

        <Button
            onClick={() => {
                console.log("Perfect Dinner");
            }}
            type="button"
            buttonStyle="btn--primary--outline"
            buttonSize="btn--large"
        >
            Dinner
        </Button>
        <Card />
    </div>
);

const mark = [
{
value:0,
label:"$50"
},
{
value:50,
label:"$75"
},
{
value:100,
label:"$100"
},
{
value:150,
label:"$125"
},
{
value:200,
label:"$150"
}
]

const getValue =(e, val) => {
console.warn(val)
}

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Switch>
              <Route path={"/about-us"} component={About}/>
              <Route path={"/"} component={Home}/>
          </Switch>
      </Router>
      <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
      }}>
          <Header/>
      </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

