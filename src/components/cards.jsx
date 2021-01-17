import React, {Component} from "react";
import Card from "./cardDesign";
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import logo from "../logo.svg";

class Cards extends Component {

    state = {
        visible:true,
        visible2:true,
        visible3:true
    };

    triggerEnterAction(){
        console.log("Entered!");
    }
    triggerLeaveAction(){
        console.log("Leave!")
    }

    render() {

        const pasta = ["8 oz. pasta ($0.67)", "2 Tbsp butter ($0.26)", "2 cloves garlic, minced ($0.16)", "1 cup frozen peas ($0.38)", "1 cup half and half* ($0.75)", "1/2 cup shredded Parmesan ($0.95)", "12 oz. can solid albicore tuna, drained ($2.79)"];
        const listPastaIngredients = pasta.map((ingredient) =>
            <li>{ingredient}</li>
        );

        const hotPot = ["1/2 lb. frozen broccoli florets ($1.05)", "4 oz. bacon ($1.43)", "8 oz. medium cheddar ($2.50)", "1/2 lb. pasta ($0.50)", "1 cup evaporated milk ($1.19)", "1/2 tsp smoked paprika ($0.05)", "1/2 tsp hot sauce ($0.05)", "1/2 tsp Dijon mustard ($0.02)", "1/4 tsp salt ($0.02)"];
        const listPotIngredients = hotPot.map((ingredient) =>
            <li>{ingredient}</li>
        );

        const bbq = ["1.5 cups chopped cooked chicken ($1.50)", "1 15oz. can black beans, drained ($0.95)", "1/4 red onion ($0.19)", " 1 jalapeño ($0.12)", "1/2 cup fresh cilantro ($0.23)", "2 cups shredded cheddar ($1.99)", "1 tsp chili powder ($0.10)", "1/2 tsp smoked paprika ($0.05)", "1/4 tsp salt ($0.02)", "1/2 cup Sweet Baby Ray's BBQ Sauce ($0.53)", "10 7-inch flour tortillas ($1.58)"];
        const listBBQIngredients = bbq.map((ingredient) =>
            <li>{ingredient}</li>
        );

        return (
            <div
            className="cards">
                <div className="myCard">
                    {/*<RecipeCard title="asd"*/}
                    {/*            al="Image 1"*/}
                    {/*            ingredients="asdasdasdsdasdasds"*/}
                    {/*/>*/}
                    <Card imgsrc={null} title="Monday"
                          header1 = "Breakfast"
                          header2 = "Lunch"
                          header3 = "Dinner"
                          recipe1Title="Curried Chickpeas with Spinach"
                          recipe2Title="Pork and Peanut Dragon Noodles"
                          recipe3Title="One Pot Chili Pasta"
                    />
                </div>
                <div className="myCard">
                    <Card imgsrc={null} title="Tuesday"
                          header1 = "Breakfast"
                          header2 = "Lunch"
                          header3 = "Dinner"
                          recipe1Title="Beef and Cabbage Stir Fry"
                          recipe2Title="Bowties and Broccoli"
                          recipe3Title="Poor Man's Burrito Bowls"
                    />
                </div>

                <div
                    onMouseEnter={()=>
                        this.setState({visible: false})
                    }
                    onMouseLeave={()=>
                        this.setState({visible: true})
                    }

                    className="myCard">
                    {this.state.visible ? <Card imgsrc={null} title="Wednesday"
                                                header1 = "Breakfast"
                                                header2 = "Lunch"
                                                header3 = "Dinner"
                                                recipe1Title="Beef and Cabbage Stir Fry"
                                                recipe2Title="Bowties and Broccoli"
                                                recipe3Title="Poor Man's Burrito Bowls"/>


                        : <Card className="recipe" imgsrc={img1} title=""
                                header1 = "Ingredients"
                                listIngre = {listPastaIngredients}/>}
                </div>
                <div
                    onMouseEnter={()=>
                        this.setState({visible2: false})
                    }
                    onMouseLeave={()=>
                        this.setState({visible2: true})
                    }

                    className="myCard">
                    {this.state.visible2 ? <Card imgsrc={null} title="Thursday"
                                                header1 = "Breakfast"
                                                header2 = "Lunch"
                                                header3 = "Dinner"
                                                recipe1Title="Beef and Cabbage Stir Fry"
                                                recipe2Title="Bowties and Broccoli"
                                                recipe3Title="Poor Man's Burrito Bowls"/>


                        : <Card className="recipe" imgsrc={img2} title=""
                                header1 = "Ingredients"
                                listIngre = {listPotIngredients}/>}
                </div>
                <div
                    onMouseEnter={()=>
                        this.setState({visible3: false})
                    }
                    onMouseLeave={()=>
                        this.setState({visible3: true})
                    }

                    className="myCard">
                    {this.state.visible3 ? <Card imgsrc={null} title="Friday"
                                                header1 = "Breakfast"
                                                header2 = "Lunch"
                                                header3 = "Dinner"
                                                recipe1Title="Beef and Cabbage Stir Fry"
                                                recipe2Title="Bowties and Broccoli"
                                                recipe3Title="Poor Man's Burrito Bowls"/>


                        : <Card className="recipe" imgsrc={img3} title=""
                                header1 = "Ingredients"
                                listIngre = {listBBQIngredients}/>}
                </div>
                <div className="myCard">
                    <Card imgsrc={null} title="Saturday"
                          header1 = "Breakfast"
                          header2 = "Lunch"
                          header3 = "Dinner"
                          recipe1Title="Homemade Freezer Garlic Bread"
                          recipe2Title="Creamy Black Bean Taquitos"
                          recipe3Title="Golden Milk Overnight Oats"/>
                </div>
                <div className="myCard">
                    <Card imgsrc={null} title="Sunday"
                          header1 = "Breakfast"
                          header2 = "Lunch"
                          header3 = "Dinner"
                          recipe1Title="Apple Pie Overnight Oats"
                          recipe2Title="Bean and Cheese Burritos"
                          recipe3Title="Spinach Chickpea and Quinoa Salad"/>
                </div>
            </div>
        );
    }
}

export default Cards;