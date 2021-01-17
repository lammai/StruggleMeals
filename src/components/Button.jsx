import React from 'react';
import "./button.css";

const STYLES = [
    "btn--primary--solid",
    "btn--warning--solid",
    "btn--danger--solid",
    "btn--success--solid",
    "btn--primary--solid",
    "btn--warning--solid",
    "btn--danger--solid",
    "btn--success--solid"
   ]

const SIZES = ["btn--medium", "btn--large"]

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
    }) => {

    const checkStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];

    const checkSize = SIZES.includes(buttonSize)
        ? buttonSize
        : SIZES[0];

    return (
        <button
        className={`btn ${checkStyle} ${checkSize}`}
        onClick = {onClick}
        type ={type}
        >
        {children}
        </button>
    );

    };