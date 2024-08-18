import React from 'react';
import svgArrow from "../../assets/arrowcircleleft.svg"


interface ButtonArrowLeftProps {
    className?: string,
    onClick?: () => void

}
/**
 * A previous circular button - has icon in the middle
 * @param className styling classes
 * @param onClick on click method for the button
 */
function ButtonPrevious({className , onClick}: ButtonArrowLeftProps) {
    return (
        <div className="cursor-pointer " onClick={onClick}>
            <img src={svgArrow} className={`${className} active:scale-110 opacity-80 
            hover:opacity-100 duration-100 rotate-180   `} alt="button that looks like an arrow"/>
        </div>

    );
}

export default ButtonPrevious;