import trashSvg from "../../assets/Trash.svg"

interface ButtonDeleteProps {
    className?: string,
    onClick?: () => void
}

/**
 * A delete circular button - has a trash icon in the middle
 * @param className styling classes
 * @param onClick on click method for the button
 */
function DeleteButton({className , onClick}: ButtonDeleteProps) {
    return (
        <div className="cursor-pointer" onClick={onClick}>
            <img src={trashSvg} className={className} alt="image of Trash - delete button"/>
        </div>
    );
}

export default DeleteButton;