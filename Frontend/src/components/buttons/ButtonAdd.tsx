import addSvg from "../../assets/add.svg"

interface ButtonAddProps {
    className?: string
}

function ButtonAdd({className}: ButtonAddProps) {
    return (
        <div className=" cursor-pointer">
            <img src={addSvg} className={className} alt="image of plus sign - add button"/>
        </div>
    );
}

export default ButtonAdd;