import React from "react";
import './card-style.css'

const RecipeCard = props => {
    const exampleIngredients = ["bread", "eggs", "idk", "asd"];
    const listIngredients = exampleIngredients.map((ingredient) =>
        <li>{ingredient}</li>
    //    make key = id when we use api
    );
    // Maybe we can do this?
    // onMouseEnter={ change Card }
    // onMouseLeave={ back to og Card}


    return (
        <div className="recipeCard text-center">
            <div className="overflow">
                <img src={props.imgsrc} alt={props.al} className="recipe-img-top"/>
            </div>
            <div className="recipeCard-body text-dark">
                <h4 className="recipeCard-title text-center">{props.title}</h4>
                <ul>{listIngredients}</ul>
            </div>
        </div>
    );
}

export default RecipeCard