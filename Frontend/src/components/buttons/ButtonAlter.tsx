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
/**
 * A circular button which is a nav link to the specified location
 * @param className the styling classes
 * @param to where to route when clicked
 * @param currentSlide current slide
 * @param edit is called for edit or adding
 * @constructor
 */
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