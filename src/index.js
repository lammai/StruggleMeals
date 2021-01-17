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
import './App.css';
import Slider from 'rc-slider';
import "rc-slider/assets/index.css";
import Header from './components/common/header/Header';
import About from "./components/About";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const Home = () => (
    <div>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Header/>
        </div>
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
      <Header />
      <div style = {{width:500,marginLeft:'30vw', marginBottom:'9rem', display:'block', position:'relative'}}>
          <p style= {{marginBottom: "10px"}}>
              Choose your budget
          </p>
          <Slider className='slider'
            defaultValue = {50}
            max = {4}
            step = {null}
            marks = {mark}
            valueLabelDisplay="auto"
            onCharge={getValue}/>
     </div>
      <Card />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

