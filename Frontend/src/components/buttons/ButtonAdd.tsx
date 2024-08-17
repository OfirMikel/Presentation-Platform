import addSvg from "../../assets/add.svg"
import {NavLink} from "react-router-dom";
import {Slide} from "../../types/slide.ts";

interface ButtonAddProps {
    className?: string,
    to: string,
    currentSlide:Slide | null,
    edit:boolean
}

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