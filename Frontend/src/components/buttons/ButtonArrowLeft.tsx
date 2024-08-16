import React from 'react';
import svgArrow from "../../assets/arrowcircleleft.svg"


interface ButtonArrowLeftProps {
    className?: string
}

function ButtonArrowLeft({className}: ButtonArrowLeftProps) {
    return (
        <div className="cursor-pointer ">
            <img src={svgArrow} className={`${className} active:scale-110 opacity-80 
            hover:opacity-100 duration-100 rotate-180   `} alt="button that looks like an arrow"/>
        </div>

    );
}

export default ButtonArrowLeft;