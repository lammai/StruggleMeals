import React from "react";
import './card-style.css'

const Card = props => {
    // Maybe we can do this?
    // onMouseEnter={ change Card }
    // onMouseLeave={ back to og Card}
    return (
        <div className="card text-center shadow">
            {/* Adding image at the top of the card*/}
            {/*<div className="overflow">*/}
            {/*    <img src={props.imgsrc} alt="Image 1" className="card-img-top"/>*/}
            {/*</div>*/}
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">
                    <dt className="breakfast">Breakfast</dt>
                        <dd className="recipe1">- {props.recipe1Title}</dd>
                    <dt className="lunch">Lunch</dt>
                        <dd className="recipe1">- {props.recipe2Title}</dd>
                    <dt className="dinner">Dinner</dt>
                        <dd className="recipe1">- {props.recipe3Title}</dd>
                </p>
            </div>
        </div>
    );
}

export default Card