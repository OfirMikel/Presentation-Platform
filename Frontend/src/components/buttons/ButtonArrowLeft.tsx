import React from 'react';
import svgArrow from "../../assets/arrowcircleleft.svg"


interface ButtonArrowLeftProps {
    className?: string
}

function ButtonArrowLeft({className}: ButtonArrowLeftProps) {
    return (
        <div className="cursor-pointer ">
            <img src={svgArrow}
                 className={`${className} active:opacity-100 opacity-70 hover:opacity-80 duration-200 `} alt="button that looks like an arrow" />
        </div>

    );
}

export default ButtonArrowLeft;