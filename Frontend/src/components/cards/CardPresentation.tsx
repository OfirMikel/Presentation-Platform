import React from 'react';
import {Presentation} from "../../types/presentation.ts";
import TextExo2Font from "../typography/TextExo2Font.tsx";
import DeleteButton from "../buttons/ButtonDelete.tsx";
import {NavLink, useNavigate} from "react-router-dom";
import {deletePresentation} from "../../services/presentationApi.ts";

interface CardPresentationProps {
    presentation: Presentation;
}

function CardPresentation({presentation}: CardPresentationProps) {
    const formatedDate = presentation.DatePublished;
    const navigate = useNavigate();
    return (
        <div className="flex flex-row bg-white justify-between rounded-3xl h-[200px] drop-shadow-lg min-w-96">
            <NavLink to={`/presentation/${presentation.Title}/0`}>
                <div className="flex flex-col p-8 ">
                    <TextExo2Font className="text-2xl font-bold">{presentation.Title}</TextExo2Font>
                    <TextExo2Font className="">{`DatePublished: ${formatedDate}`}</TextExo2Font>
                    <TextExo2Font className="">{`Authors Amount: ${presentation.AuthorsList.length}`}</TextExo2Font>
                    <TextExo2Font className="">{`Slides: ${presentation.SlidesId.length}`}</TextExo2Font>
                </div>
            </NavLink>

            <div className="h-full flex justify-center items-center">
                <DeleteButton className="p-5 h-1/3" onClick={()=>deletePresentation(presentation,navigate)}/>
            </div>
        </div>
    );
}

export default CardPresentation;