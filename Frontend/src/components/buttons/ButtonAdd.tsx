import addSvg from "../../assets/add.svg"
import {NavLink} from "react-router-dom";

interface ButtonAddProps {
    className?: string,
    to: string
}

function ButtonAdd({className, to}: ButtonAddProps) {
    return (
        <NavLink to={to}>
            <img src={addSvg} className={className} alt="image of plus sign - add button"/>
        </NavLink>
    );
}

export default ButtonAdd;