import homeSvg from "../../assets/home.svg"
import {NavLink} from "react-router-dom";

interface ButtonHomeProps {
    className?: string
}
/**
 * A circular button which is a nav link to home page
 * @param className the styling classes
 */
function ButtonHome({className}: ButtonHomeProps) {
    return (
        <NavLink to={"/"} className={className}>
            <img src={homeSvg} alt="image of home - return to home button"/>
        </NavLink>
    );
}

export default ButtonHome;