import React, {Component} from "react";
import Card from "./cardDesign";

import img1 from '../assets/howcuttingdo.jpg';
import img2 from '../assets/iStock-10131071761-1.jpg';
import img3 from '../assets/pizzabeer.jpg';

class Cards extends Component {



    render() {
        return (
            <div className="cards">
                <div className="myCard" onMouseOver={this}>
                    <Card imgsrc={img1} title="Monday"
                          recipe1Title="Curried Chickpeas with Spinach"
                          recipe2Title="Pork and Peanut Dragon Noodles"
                          recipe3Title="One Pot Chili Pasta"/>
                </div>
                <div className="myCard">
                    <Card imgsrc={img2} title="Tuesday"
                          recipe1Title="Beef and Cabbage Stir Fry"
                          recipe2Title="Bowties and Broccoli"
                          recipe3Title="Poor Man's Burrito Bowls"/>
                </div>
                <div className="myCard">
                    <Card imgsrc={img3} title="Wednesday"
                          recipe1Title="Creamy Tuna Pasta with Peas and Parmesan"
                          recipe2Title="Weeknight Black Bean Chili"
                          recipe3Title="Dragon Noodles"/>
                </div>
                <div className="myCard">
                    <Card imgsrc={img1} title="Thursday"
                          recipe1Title="One Pot Bacon Broccoli Mac and Cheese"
                          recipe2Title="Hearty Black Bean Quesadillas"
                          recipe3Title="Spinach Feta Grilled Cheese"/>
                </div>
                <div className="myCard">
                    <Card imgsrc={img2} title="Friday"
                          recipe1Title="Caramelized Banana and Peanut Butter Quesadilla"
                          recipe2Title="Pizza Roll Ups"
                          recipe3Title="Ultimate BBQ Chicken Quesadillas"/>
                </div>
                <div className="myCard">
                    <Card imgsrc={img3} title="Saturday"
                          recipe1Title="Homemade Freezer Garlic Bread"
                          recipe2Title="Creamy Black Bean Taquitos"
                          recipe3Title="Golden Milk Overnight Oats"/>
                </div>
                <div className="myCard">
                    <Card imgsrc={img2} title="Sunday"
                          recipe1Title="Apple Pie Overnight Oats"
                          recipe2Title="Bean and Cheese Burritos"
                          recipe3Title="Spinach Chickpea and Quinoa Salad"/>
                </div>
            </div>
        );
    }
}

export default Cards;