import React from 'react';
import {Presentation} from "../../types/presentation.ts";
import TextExo2Font from "../typography/TextExo2Font.tsx";
import image from "../../assets/presentationimg.png";

interface CardPresentationProps {
    presentation: Presentation;
}

function CardPresentation({presentation}: CardPresentationProps) {
    const formatedDate = presentation.DatePublished;
    return (
        <div className="flex flex-row bg-white justify-between rounded-3xl h-[200px]  drop-shadow-lg min-w-[32rem] ">
            <div className="flex flex-col p-8 ">
                <TextExo2Font className="text-2xl font-bold">{presentation.Title}</TextExo2Font>
                <TextExo2Font className="">{`DatePublished: ${formatedDate}`}</TextExo2Font>
                <TextExo2Font className="">{`Authors Amount: ${presentation.AuthorsList.length}`}</TextExo2Font>
                <TextExo2Font className="">{`Slides: ${presentation.SlidesId.length}`}</TextExo2Font>
            </div>
            <img src={image} className="h-full aspect-square p-5" alt="" />
        </div>
    );
}

export default CardPresentation;