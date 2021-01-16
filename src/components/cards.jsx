import React, {Component} from "react";
import Card from "./cardDesign";

import img1 from '../assets/howcuttingdo.jpg';
import img2 from '../assets/iStock-10131071761-1.jpg';
import img3 from '../assets/pizzabeer.jpg';

class Cards extends Component {

    render() {
        return (
            <div className="cards">
                <div className="myCard">
                    <Card imgsrc={img1} title="Burgers"/>
                </div>
                <div className="myCard">
                    <Card imgsrc={img2} title="Vegies"/>
                </div>
                <div className="myCard">
                    <Card imgsrc={img3} title="Pizza and Beer"/>
                </div>
                <div className="myCard">
                    <Card imgsrc={img1} title="Burgers"/>
                </div>
                <div className="myCard">
                    <Card imgsrc={img2} title="Vegies"/>
                </div>
                <div className="myCard">
                    <Card imgsrc={img3} title="Pizza and Beer"/>
                </div>
                <div className="myCard">
                    <Card imgsrc={img2} title="Vegies"/>
                </div>
            </div>
        );
    }
}

export default Cards;