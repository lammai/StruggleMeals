import React from "react";
import './card-style.css'

const RecipeCard = props => {
    // Maybe we can do this?
    // onMouseEnter={ change Card }
    // onMouseLeave={ back to og Card}
    return (
        <div className="recipeCard text-center">
            <div className="overflow">
                <img src={props.imgsrc} alt={props.al} className="recipe-img-top"/>
            </div>
            <div className="recipeCard-body text-dark">
                <h4 className="recipeCard-title">{props.title}</h4>
                <p className="recipeCard-text text-secondary">{props.ingredients}</p>
            </div>
        </div>
    );
}

export default RecipeCard