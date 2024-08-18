import {useNavigate} from "react-router-dom";
import Background from "../components/background/Background.tsx";
import ButtonNext from "../components/buttons/ButtonNext.tsx";
import ButtonPrevious from "../components/buttons/ButtonPrevious.tsx";
import TextExo2Font from "../components/typography/TextExo2Font.tsx";
import ButtonAdd from "../components/buttons/ButtonAdd.tsx";
import ButtonDelete from "../components/buttons/ButtonDelete.tsx";
import ButtonHome from "../components/buttons/ButtonHome.tsx";
import {useSlideNavigation} from "../hooks/useSlideNavigation.ts";
import {goToNextSlide, goToPreviousSlide, handleDeleteSlide} from "../utils/hundleButtons.ts";
import Spinner from "../components/Spinner.tsx";
import ErrorSlide from "../components/Errors/ErrorSlide.tsx";
import StarterSlide from "./StarterSlide.tsx";
import ButtonAlter from "../components/buttons/ButtonAlter.tsx";
import React, {useState} from "react";
import PopUp from "../components/PopUp.tsx";

/**
 * A slide page show all the information of a specific file
 * @constructor
 */
function SlidePage() {
    const {currentSlide, presentation, loading, error, setPresentation} = useSlideNavigation();
    const navigate = useNavigate();
    const [showPopUp, setShowPopUp] = useState({message:"" , isOpen:false});

    if (loading) return <Spinner/>;
    if (error) return <ErrorSlide error={error}/>;
    if (!presentation) return <ErrorSlide error={"No presentation data available."}/>;
    if (!currentSlide) {
        return <StarterSlide presentation={presentation}/>
    }
    return (
        <Background className="flex flex-col justify-center items-center gap-5 relative">
            {showPopUp.isOpen && <PopUp onClose={()=>{setShowPopUp({message: showPopUp.message , isOpen:false})}} message={showPopUp.message}  />}
            <TextExo2Font className="text-3xl">{`Slide ${currentSlide.page}`}</TextExo2Font>
            <div className="h-5/6 w-full flex flex-row justify-center items-center">
                <ButtonPrevious
                    className="w-36 max-laptop:w-20 max-laptop:absolute max-laptop:top-1/2 z-10 max-laptop:left-0 max-laptop:-translate-y-1/2"
                    onClick={() => goToPreviousSlide(presentation!, navigate, currentSlide , setShowPopUp )}
                />
                <div
                    className="relative w-full max-laptop:ml-2.5 max-laptop:mr-2.5 laptop:w-9/12 h-full bg-white rounded-[3rem] border-2 border-black
                    drop-shadow-5xl flex flex-col items-center justify-center">
                    <div className="h-max m-4 mt-32 flex items-center justify-center">
                        <TextExo2Font
                            className="flex-auto text-center text-5xl">{currentSlide.headline}</TextExo2Font>
                    </div>
                    <div className="h-max overflow-y-scroll mb-14 w-4/5 items-center justify-center">
                        <TextExo2Font
                            className={` flex-auto ${currentSlide.style.fontColor} ${currentSlide.style.fontWeight}`}
                        >
                            {`${currentSlide.content}` }
                        </TextExo2Font>
                    </div>
                    <div className="max-laptop:flex max-laptop:items-center max-laptop:justify-between max-laptop:w-10/12">
                        <ButtonAlter
                            to={`/presentation/${presentation.Title}/alter`}
                            currentSlide={currentSlide}
                            edit={true}
                            className="laptop:absolute laptop:top-7 laptop:left-1/2 laptop:-translate-x-1/2 w-16 opacity-40 hover:opacity-80 active:opacity-100 duration-200
                            active:scale-110"/>
                        <ButtonAdd
                            to={`/presentation/${presentation.Title}/alter`}
                            currentSlide={null}
                            edit={false}
                            className="laptop:absolute laptop:top-7 laptop:right-9 w-16 opacity-40 hover:opacity-80 active:opacity-100 duration-200 active:scale-110"/>
                        <ButtonDelete
                            onClick={() => handleDeleteSlide(currentSlide, presentation, setPresentation)}
                            className="laptop:absolute laptop:top-7 laptop:left-9 w-16 opacity-40 hover:opacity-80 active:opacity-100 duration-200 active:scale-110"/>
                    </div>

                </div>
                <ButtonNext
                    className="w-36 max-laptop:w-20 max-laptop:absolute max-laptop:top-1/2 max-laptop:right-0 max-laptop:-translate-y-1/2"
                    onClick={() => goToNextSlide(presentation!, navigate, currentSlide , setShowPopUp)}
                />
            </div>

            <ButtonHome
                className="laptop:absolute laptop:top-7 laptop:left-9 w-16 opacity-40 hover:opacity-80 active:opacity-100 duration-200 active:scale-110"/>
        </Background>
    );
}

export default SlidePage;


