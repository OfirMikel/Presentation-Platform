import Background from "../components/background/Background.tsx";
import ButtonHome from "../components/buttons/ButtonHome.tsx";
import {useParams} from "react-router-dom";
import Error from "../components/Errors/Error.tsx";

function AddSlide() {

    const {title} = useParams();
    if (!title){
        return <Error/>
    }
    return (
        <Background className="flex flex-col justify-center items-center gap-5 relative">
            <div className="h-5/6 w-full flex flex-row justify-center items-center ">
                <div
                    className="relative laptop:w-9/12 h-full bg-white rounded-[3rem] border-2 border-black drop-shadow-5xl flex flex-col items-center justify-center">
                </div>
            </div>
            <ButtonHome className="laptop:absolute laptop:top-7 laptop:left-9 w-16 opacity-40 hover:opacity-80 active:opacity-100 duration-200 active:scale-110 " />
        </Background>
    );
}

export default AddSlide;