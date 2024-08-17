import trashSvg from "../../assets/Trash.svg"

interface ButtonDeleteProps {
    className?: string,
    onClick?: () => void
}

function DeleteButton({className , onClick}: ButtonDeleteProps) {
    return (
        <div className="cursor-pointer" onClick={onClick}>
            <img src={trashSvg} className={className} alt="image of Trash - delete button"/>
        </div>
    );
}

export default DeleteButton;