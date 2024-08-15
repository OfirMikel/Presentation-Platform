import Background from "../components/background/Background.tsx";
import TextExo2Font from "../components/typography/TextExo2Font.tsx";
import {Presentation} from "../types/presentation.ts";
import CardPresentation from "../components/cards/CardPresentation.tsx";
import {NavLink} from "react-router-dom";
import ButtonNewPresentation from "../components/buttons/ButtonNewPresentation.tsx";

function Home() {
    const presentationTemplate: Presentation = {
        id: "0",
        Title: "HomeAssignment",
        AuthorsList: ["hi", "sdf", "sdf"],
        DatePublished: new Date(),
        SlidesId: ["1", "2", "3"],
    };
    const presentationTemplates: Presentation[] = Array.from({length: 14}, () => presentationTemplate);

    return (

        <Background className="h-dvw overflow-y-scroll ">
            <div className="flex justify-center items-center">
                <div className="laptop:w-2/3 flex flex-col laptop:flex-row ">
                    <div
                        className="laptop:h-dvh max-laptop:p-9 flex flex-col justify-between items-center laptop:w-1/2 laptop:sticky laptop:top-0 laptop:z-10 p-14">
                        <div>
                            <TextExo2Font className="font-extrabold text-7xl text-center">Ofir Mikel</TextExo2Font>
                            <TextExo2Font className="font-light text-xl text-center">Presentation
                                Platform</TextExo2Font>
                        </div>
                        <ButtonNewPresentation to={`/new_presentation`}/>
                    </div>

                    <div className="laptop:w-1/2 flex flex-col gap-5 laptop:mt-[1.25rem]">
                        {presentationTemplates.map((template, index) => (
                            <NavLink to={`/presentation/${template.Title}/1`} key={index}>
                                <CardPresentation  presentation={template}/>
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </Background>
    );
}

export default Home;