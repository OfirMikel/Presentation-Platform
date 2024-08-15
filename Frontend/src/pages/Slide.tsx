import { useParams } from "react-router-dom";
import Background from "../components/background/Background.tsx";
import {useState} from "react";
import ButtonArrowRight from "../components/buttons/ButtonArrowRight.tsx";
import ButtonArrowLeft from "../components/buttons/ButtonArrowLeft.tsx";

function Slide() {
    const { title ,  page  } = useParams();
    const [currentPage , setCurrenPage] = useState(page);
    // Use the title and slideId to fetch or display the corresponding slide details
    return (
        <Background className="flex justify-center items-center relative">

            <div className="laptop:w-9/12 bg-white h-5/6 rounded-[3rem] border-2 border-black drop-shadow-5xl">
                <ButtonArrowRight />
                <ButtonArrowLeft />
            </div>

            {/* Slide content goes here */}
        </Background>
    );
}

export default Slide;