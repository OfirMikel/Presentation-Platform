import addSvg from "../../assets/add.svg"
import {NavLink} from "react-router-dom";
import {Slide} from "../../types/slide.ts";

interface ButtonAddProps {
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
 */
function ButtonAdd({className, to, currentSlide , edit}: ButtonAddProps) {
    const routeState = {
        currentSlide: currentSlide,
        edit: edit
    }
    return (
        <NavLink to={to} state={routeState}>
            <img src={addSvg} className={className} alt="image of plus sign - add button"/>
        </NavLink>
    );
}

export default ButtonAdd;