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
    const formatedDate = new Date(presentation.DatePublished).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
    const navigate = useNavigate();
    const maxLength = 50;

    const authorsText = presentation.AuthorsList.join(', ');
    const truncatedText = authorsText.length > maxLength ? `${authorsText.slice(0, maxLength - 3)}...` : authorsText;
    return (
        <div className="flex flex-row bg-white justify-between rounded-3xl h-[200px] drop-shadow-lg min-w-96">
            <NavLink to={`/presentation/${presentation.Title}/0`}>
                <div className="flex flex-col p-8 ">
                    <TextExo2Font className="text-2xl font-bold">{presentation.Title}</TextExo2Font>
                    <div className="mt-2">
                        <TextExo2Font className="inline-block">{`Authors:`}</TextExo2Font>
                        <span>{"\t"}</span>
                        <TextExo2Font  className="inline-block">{truncatedText}</TextExo2Font>
                    </div>
                    <TextExo2Font className="">{`Slides: ${presentation.SlidesId.length}`}</TextExo2Font>
                    <TextExo2Font className="">{`DatePublished: ${formatedDate}`}</TextExo2Font>
                </div>
            </NavLink>

            <div className="h-full flex justify-center items-center">
                <DeleteButton className="p-5 h-1/3" onClick={()=>deletePresentation(presentation,navigate)}/>
            </div>
        </div>
    );
}

export default CardPresentation;