import React from "react";
import './card-style.css'

const Card = props => {
    return (
        <div className="card text-center shadow">
            {/* Adding image at the top of the card*/}
            {/*<div className="overflow">*/}
            {/*    <img src={props.imgsrc} alt="Image 1" className="card-img-top"/>*/}
            {/*</div>*/}
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consectetur corporis debitis eum illo, porro sed veniam voluptatibus. Consequuntur ea et expedita fuga laborum nam non officia ratione soluta voluptatum?
                </p>
            </div>
        </div>
    );
}

export default Card