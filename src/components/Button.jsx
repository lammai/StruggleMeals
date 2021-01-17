import React from 'react';
import "./button.css";

const SIZES = ["btn--medium", "btn--large"]

export const Button = ({
    children,
    type,
    buttonSize
    }) => {

    const checkSize = SIZES.includes(buttonSize)
        ? buttonSize
        : SIZES[0];

    return (
            <button
            className={`btn ${checkSize}`}
            type ={type}
            >
            {children}
            </button>
        );

    };