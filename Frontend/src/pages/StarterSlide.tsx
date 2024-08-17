import React, {useState} from 'react';
import TextExo2Font from "../components/typography/TextExo2Font.tsx";
import ButtonPrevious from "../components/buttons/ButtonPrevious.tsx";
import ButtonAdd from "../components/buttons/ButtonAdd.tsx";
import ButtonNext from "../components/buttons/ButtonNext.tsx";
import ButtonHome from "../components/buttons/ButtonHome.tsx";
import Background from "../components/background/Background.tsx";
import {Presentation} from "../types/presentation.ts";
import {goToNextSlide, goToPreviousSlide} from "../utils/hundleButtons.ts";
import {NavigateFunction, useNavigate} from "react-router-dom";
import PopUp from "../components/PopUp.tsx";
import {Slide} from "../types/slide.ts";
interface StarterSlideProps {
    presentation: Presentation;
}

function StarterSlide({presentation}: StarterSlideProps) {
    const [isShaking, setIsShaking] = useState(false);
    const Authors = presentation.AuthorsList;
    const navigate = useNavigate();
    const formatedDate = new Date(presentation.DatePublished).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
    const [showPopUp, setShowPopUp] = useState({message: "", isOpen: false});

    const handleShake = () => {
        setIsShaking(true);
        setTimeout(() => setIsShaking(false), 500);
    };

    return (
        <Background className="flex flex-col justify-center items-center gap-5 relative overflow-hidden">
            {showPopUp.isOpen &&
                <PopUp onClose={() => setShowPopUp({message: showPopUp.message, isOpen: false})}
                       message={showPopUp.message}/>}
            <TextExo2Font className="text-3xl">{`Opening Slide`}</TextExo2Font>
            <div
                className={`h-5/6 w-full flex flex-row justify-center items-center ${isShaking ? 'animate-shake' : ''}`}>
                <ButtonPrevious
                    className="w-36 max-laptop:w-20 max-laptop:absolute max-laptop:top-1/2 z-10 max-laptop:left-0 max-laptop:-translate-y-1/2"
                    onClick={() => goToPreviousSlide(presentation!, navigate, null, setShowPopUp,handleShake)}
                />
                <div
                    className="relative w-full max-laptop:ml-2.5 max-laptop:mr-2.5 laptop:w-9/12 h-full gap-5 bg-white rounded-[3rem] border-2 border-black drop-shadow-5xl flex flex-col items-center justify-center">
                    <div className="h-1/3 flex items-center justify-center">
                        <TextExo2Font
                            className="flex-auto text-center text-5xl">{presentation.Title}</TextExo2Font>
                    </div>
                    <TextExo2Font className="text-3xl"> Authors: </TextExo2Font>
                    <div className="justify-center items-center">
                        {Authors.map((author, index) =>
                            <TextExo2Font key={index} className={`flex-auto`}>{author}</TextExo2Font>
                        )}
                    </div>

                    <TextExo2Font className="text-3xl">Date: </TextExo2Font>
                    <TextExo2Font>{formatedDate}</TextExo2Font>

                    <ButtonAdd
                        currentSlide={null}
                        edit={false}
                        to={`/presentation/${presentation.Title}/alter`}
                        className="laptop:absolute laptop:top-7 laptop:right-9 w-16 opacity-40 hover:opacity-80 active:opacity-100 duration-200 active:scale-110"/>

                </div>
                <ButtonNext
                    className="w-36 max-laptop:w-20 max-laptop:absolute max-laptop:top-1/2 max-laptop:right-0 max-laptop:-translate-y-1/2"
                    onClick={() => goToNextSlide(presentation!, navigate, null, setShowPopUp, handleShake)}
                />
            </div>

            <ButtonHome
                className="laptop:absolute laptop:top-7 laptop:left-9 w-16 opacity-40 hover:opacity-80 active:opacity-100 duration-200 active:scale-110"/>
        </Background>
    );
}

export default StarterSlide;