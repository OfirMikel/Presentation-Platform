import trashSvg from "../../assets/Trash.svg"

interface ButtonDeleteProps {
    className?: string
}

function DeleteButton({className}: ButtonDeleteProps) {
    return (
        <div className="cursor-pointer">
            <img src={trashSvg} className={className} alt="image of Trash - delete button"/>
        </div>
    );
}

export default DeleteButton;