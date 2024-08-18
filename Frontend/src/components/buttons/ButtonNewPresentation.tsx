import {NavLink} from "react-router-dom";
import TextExo2Font from "../typography/TextExo2Font.tsx";
import "../typography/typography.css"
interface ButtonNewPresentationProps {
    to:string,

}

/**
 * A circular button which is a nav link to a specified route
 * @param to route for the nav link
 */
function ButtonNewPresentation({to}: ButtonNewPresentationProps) {
    return (
        <NavLink to={to} className=" rounded-[2rem]  drop-shadow-lg bg-white hover:text-white hover:bg-light-red  transition-all duration-300">
            <div className="p-5" >
                <TextExo2Font className="text-xl font-extrabold ">New Presentation</TextExo2Font>
            </div>

        </NavLink>
    );
}

export default ButtonNewPresentation;