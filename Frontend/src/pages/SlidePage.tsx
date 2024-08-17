import {useNavigate} from "react-router-dom";
import Background from "../components/background/Background.tsx";
import ButtonNext from "../components/buttons/ButtonNext.tsx";
import ButtonPrevious from "../components/buttons/ButtonPrevious.tsx";
import TextExo2Font from "../components/typography/TextExo2Font.tsx";
import ButtonAdd from "../components/buttons/ButtonAdd.tsx";
import ButtonDelete from "../components/buttons/ButtonDelete.tsx";
import ButtonHome from "../components/buttons/ButtonHome.tsx";
import {useSlideNavigation} from "../hooks/useSlideNavigation.ts";
import {goToNextSlide, goToPreviousSlide} from "../components/utils/hundleButtons.ts";
import Spinner from "../components/Spinner.tsx";
import ErrorSlide from "../components/Errors/ErrorSlide.tsx";
import StarterSlide from "../components/StarterSlide.tsx";

function SlidePage() {
    const {currentSlide, presentation, loading, error} = useSlideNavigation();
    const navigate = useNavigate();
    if (loading) return <Spinner/>;
    if (error) return <ErrorSlide error={error}/>;
    if (!presentation) return <ErrorSlide error={"No presentation data available."}/>;
    if (!currentSlide){
        return <StarterSlide presentation={presentation} />
    }
    return (
        <Background className="flex flex-col justify-center items-center gap-5 relative">
            <TextExo2Font className="text-3xl">{`Slide ${currentSlide.page}`}</TextExo2Font>
            <div className="h-5/6 w-full flex flex-row justify-center items-center">
                <ButtonPrevious
                    className="w-36"
                    onClick={() => goToPreviousSlide( presentation!, navigate , currentSlide)}
                />
                <div
                    className="relative laptop:w-9/12 h-full bg-white rounded-[3rem] border-2 border-black drop-shadow-5xl flex flex-col items-center justify-center">
                    <div className="h-1/2 flex items-center justify-center">
                        <TextExo2Font
                            className="flex-auto text-center text-5xl">{currentSlide.headline}</TextExo2Font>
                    </div>
                    <div className="h-1/2 w-3/5 justify-center">
                        <TextExo2Font
                            className={`flex-auto text-${currentSlide.style.fontColor} font-${currentSlide.style.fontWeight}`}
                        >
                            {currentSlide.content}
                        </TextExo2Font>
                    </div>
                    <ButtonAdd
                        to={`/presentation/${presentation.Title}/add`}
                        className="laptop:absolute laptop:top-7 laptop:right-9 w-16 opacity-40 hover:opacity-80 active:opacity-100 duration-200 active:scale-110"/>
                    <ButtonDelete
                        className="laptop:absolute laptop:top-7 laptop:left-9 w-16 opacity-40 hover:opacity-80 active:opacity-100 duration-200 active:scale-110"/>
                </div>
                <ButtonNext
                    className="w-36"
                    onClick={() => goToNextSlide(presentation!, navigate , currentSlide)}
                />
            </div>

            <ButtonHome
                className="laptop:absolute laptop:top-7 laptop:left-9 w-16 opacity-40 hover:opacity-80 active:opacity-100 duration-200 active:scale-110"/>
        </Background>
    );
}

export default SlidePage;