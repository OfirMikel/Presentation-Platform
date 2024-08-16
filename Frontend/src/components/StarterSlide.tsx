import React from 'react';
import TextExo2Font from "./typography/TextExo2Font.tsx";
import ButtonPrevious from "./buttons/ButtonPrevious.tsx";
import ButtonAdd from "./buttons/ButtonAdd.tsx";
import ButtonDelete from "./buttons/ButtonDelete.tsx";
import ButtonNext from "./buttons/ButtonNext.tsx";
import ButtonHome from "./buttons/ButtonHome.tsx";
import Background from "./background/Background.tsx";
import {Presentation} from "../types/presentation.ts";
import {Slide} from "../types/slide.ts";

interface StarterSlideProps {
    presentation: Presentation;
}

function StarterSlide({presentation}: StarterSlideProps) {
    const Authors = presentation.AuthorsList;
    return (
        <Background className="flex flex-col justify-center items-center gap-5 relative">
            <TextExo2Font className="text-3xl">{`Opening Slide`}</TextExo2Font>
            <div className="h-5/6 w-full flex flex-row justify-center items-center">
                <ButtonPrevious
                    className="w-36"
                    // onClick={() => goToPreviousSlide(currentPage, presentation!, navigate)}
                />
                <div
                    className="relative laptop:w-9/12 h-full gap-5 bg-white rounded-[3rem] border-2 border-black drop-shadow-5xl flex flex-col items-center justify-center">
                    <div className="h-1/3 flex items-center justify-center">
                        <TextExo2Font
                            className="flex-auto text-center text-5xl">{presentation.Title}</TextExo2Font>
                    </div>
                    <TextExo2Font className="text-3xl">Date: </TextExo2Font>
                    <TextExo2Font >{presentation.DatePublished} </TextExo2Font>
                    <TextExo2Font className="text-3xl"> Authors: </TextExo2Font>
                    <div className=" justify-center items-center">
                        {Authors.map((author, index) =>
                            <TextExo2Font key={index} className={`flex-auto`}>{author}</TextExo2Font>
                        )}
                    </div>
                    <ButtonAdd
                        className="laptop:absolute laptop:top-7 laptop:right-9 w-16 opacity-40 hover:opacity-80 active:opacity-100 duration-200 active:scale-110"/>

                </div>
                <ButtonNext
                    className="w-36"
                    // onClick={() => goToNextSlide(currentPage, presentation!, navigate)}
                />
            </div>

            <ButtonHome
                className="laptop:absolute laptop:top-7 laptop:left-9 w-16 opacity-40 hover:opacity-80 active:opacity-100 duration-200 active:scale-110"/>
        </Background>
    );
}

export default StarterSlide;