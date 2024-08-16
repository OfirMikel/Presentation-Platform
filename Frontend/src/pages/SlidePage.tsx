import {useParams} from "react-router-dom";
import Background from "../components/background/Background.tsx";
import {useState} from "react";
import ButtonNext from "../components/buttons/ButtonNext.tsx";
import ButtonPrevious from "../components/buttons/ButtonPrevious.tsx";
import {Slide} from "../types/slide.ts";
import TextExo2Font from "../components/typography/TextExo2Font.tsx";
import ButtonAdd from "../components/buttons/ButtonAdd.tsx";
import ButtonDelete from "../components/buttons/ButtonDelete.tsx";
import ButtonHome from "../components/buttons/ButtonHome.tsx";
import {Presentation} from "../types/presentation.ts";

function SlidePage() {
    const {title, page} = useParams<{ title: string; page: string }>();
    const [currentPage, setCurrenPage] = useState(parseInt(page ? page : "0"));

    // TODO | Here to add loader that returns the presentation and set the array of presentation accordingly

    const slideTemplate1: Slide = {
        id: "1",
        presentation: title,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit semper magna, sed scelerisque enim tincidunt ut. In libero dui, consectetur sed ante convallis, egestas placerat massa. Nulla sed semper massa. Vivamus dictum facilisis neque. Sed luctus massa eget mauris fermentum cursus. Suspendisse vulputate est lacus, vel elementum sapien suscipit sit amet. Aenean volutpat tortor quis mauris cursus dapibus. Proin vel sagittis ipsum, ac molestie orci. Suspendisse porta, odio id efficitur auctor, libero purus ullamcorper metus, et convallis lectus lorem quis nunc. Vestibulum vitae turpis massa. Integer auctor et dolor a elementum. Vivamus iaculis tempor urna, in sollicitudin lectus elementum quis. Sed at nisi vel elit congue porta.",
        headline: "Head Line 1",
        style: {
            fontSize: 1,
            fontWeight: "bold",
            fontColor: "red-400",
        },
        page: 1
    }
    const slideTemplate2: Slide = {
        id: "2",
        presentation: title,
        content: "Worked Changed To Number Two",
        headline: "Head Line 2",
        style: {
            fontSize: 1,
            fontWeight: "bold",
            fontColor: "red-400",
        },
        page: 2
    }

    const slideTemplate3: Slide = {
        id: "3",
        presentation: title,
        content: "Worked Changed To Number Three",
        headline: "Head Line 3",
        style: {
            fontSize: 1,
            fontWeight: "bold",
            fontColor: "red-400",
        },
        page: 3
    }

    const presentation: Presentation = {
        id: "2",
        Title: title ? title : "",
        AuthorsList: ["Ofir", "Alon", "Michal", "Noni"],
        DatePublished: new Date(),
        SlidesId: ["1", "2", "3"],
        presentationSlides: [slideTemplate1, slideTemplate2, slideTemplate3]
    }

    const [currentSlide, setCurrentSlide] = useState<Slide>(presentation.presentationSlides[0]);


    return (

        <Background className="flex flex-col justify-center items-center gap-5 relative">
            <TextExo2Font className="text-3xl ">{`Slide${currentPage}`}</TextExo2Font>
            <div className="h-5/6 w-full flex flex-row justify-center items-center ">
                <ButtonPrevious className="w-36" />
                <div
                    className="relative laptop:w-9/12 h-full bg-white rounded-[3rem] border-2 border-black drop-shadow-5xl flex flex-col items-center justify-center">
                    <div className="h-1/2 flex items-center justify-center">
                        <TextExo2Font className="flex-auto text-center text-5xl">{currentSlide.headline}</TextExo2Font>
                    </div>
                    <div className="h-1/2 w-3/5 justify-center">
                        <TextExo2Font
                            className={`flex-auto text-${currentSlide.style.fontColor} font-${currentSlide.style.fontWeight}`}>{currentSlide.content}</TextExo2Font>
                    </div>
                    <ButtonAdd
                        className="laptop:absolute laptop:top-7 laptop:right-9  w-16 opacity-40 hover:opacity-80 active:opacity-100 duration-200 active:scale-110 "/>
                    <ButtonDelete
                        className="laptop:absolute laptop:top-7 laptop:left-9 w-16 opacity-40 hover:opacity-80 active:opacity-100 duration-200 active:scale-110 "/>
                </div>
                <ButtonNext className="w-36"/>
            </div>
            <ButtonHome
                className="laptop:absolute laptop:top-7 laptop:left-9 w-16 opacity-40 hover:opacity-80 active:opacity-100 duration-200 active:scale-110 "/>
        </Background>
    );
}

export default SlidePage;