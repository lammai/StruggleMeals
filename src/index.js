import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
// import Counter from './components/counter';
// import Card from "./components/cardDesign";
import Card from "./components/cards"
import './App.css';
import Slider from 'rc-slider';
import "rc-slider/assets/index.css";

import "./button-styles.css";
import { Button } from "./components/Button";


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
          <div className="App">
          </div>

     <div style = {{width:500, margin:40,
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',

     }}>
     <p style= {{marginBottom: "4rem"}}>
         Choose your budget
     </p>
      <Slider
        defaultValue = {0}
        max = {4}
        step = {null}
        marks = {mark}
        valueLabelDisplay="auto"
        onCharge={getValue}
      />

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

     </div>

  <Card />

      <Card />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

