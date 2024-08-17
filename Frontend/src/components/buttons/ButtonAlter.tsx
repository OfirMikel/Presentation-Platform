import React from 'react';
import imageSvg from "../../assets/edit.svg";
import {Slide} from "../../types/slide.ts";
import {NavLink} from "react-router-dom";

interface ButtonAlterProps {
    className?: string,
    to: string,
    currentSlide:Slide | null,
    edit:boolean
}

function ButtonAlter({className, to, currentSlide , edit}: ButtonAlterProps) {
    const routeState = {
        currentSlide: currentSlide,
        edit: edit
    }
    return (
        <NavLink to={to} state={routeState}>
            <img src={imageSvg} className={className} alt="image of pencel sign - alter button"/>
        </NavLink>
    );
}
export default ButtonAlter;