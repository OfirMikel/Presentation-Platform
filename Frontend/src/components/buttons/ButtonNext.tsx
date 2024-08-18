import React from 'react';
import svgArrow from "../../assets/arrowcircleleft.svg"

interface ButtonArrowRightProps {
    className?: string,
    onClick?: () => void
}

/**
 * A next circular button - has icon in the middle
 * @param className styling classes
 * @param onClick on click method for the button
 */
function ButtonNext({className , onClick}: ButtonArrowRightProps) {
    return (
        <div className="cursor-pointer " onClick={onClick}>
            <img src={svgArrow} className={`${className} active:scale-110 opacity-80 
            hover:opacity-100 duration-100   `} alt="button that looks like an arrow"/>
        </div>
    );
}

export default ButtonNext;