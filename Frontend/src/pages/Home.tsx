import Background from "../components/background/Background.tsx";
import TextExo2Font from "../components/typography/TextExo2Font.tsx";
import {Presentation} from "../types/presentation.ts";
import CardPresentation from "../components/cards/CardPresentation.tsx";
import {NavLink, useLoaderData, useNavigation} from "react-router-dom";
import ButtonNewPresentation from "../components/buttons/ButtonNewPresentation.tsx";
import Spinner from "../components/Spinner.tsx";
import DeleteButton from "../components/buttons/ButtonDelete.tsx";
import ErrorSlide from "../components/Errors/ErrorSlide.tsx";
import Error from "../components/Errors/Error.tsx";

function Home() {
    const presentationTemplates: Presentation[] = useLoaderData();
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";

    if (isLoading) {
        return <Spinner/>;
    }

    return (
        <Background className="h-dvw overflow-y-scroll ">
            <div className="flex justify-center items-center">
                <div className="laptop:w-2/3 flex flex-col laptop:flex-row ">
                    <div
                        className="laptop:h-[80dvh] laptop:pt-[20dvh] max-laptop:p-12 flex flex-col justify-between items-center laptop:w-1/2 laptop:sticky laptop:top-0 laptop:z-10 p-14">
                        <div>
                            <TextExo2Font className="font-extrabold text-7xl text-center">Ofir Mikel</TextExo2Font>
                            <TextExo2Font className="font-light text-xl text-center">Presentation
                                Platform</TextExo2Font>
                        </div>
                        <ButtonNewPresentation to={`/new_presentation`}/>
                    </div>

                    <div className="laptop:w-1/2 flex flex-col gap-5 laptop:mt-[1.25rem]">
                        {presentationTemplates.length === 0 &&
                            <div className="h-full w-full flex items-center justify-center">
                                <TextExo2Font className="text-5xl p-10 bg-white rounded-3xl drop-shadow-5xl">No
                                    Presentations yet start creating new ones! </TextExo2Font>
                            </div>}
                        {presentationTemplates.map((template, index) => (
                            <CardPresentation key={index} presentation={template}/>
                        ))}
                    </div>
                </div>
            </div>
        </Background>
    );
}

export default Home;