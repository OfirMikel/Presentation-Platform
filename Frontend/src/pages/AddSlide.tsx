import {useParams} from "react-router-dom";
import Background from "../components/background/Background.tsx";
import ButtonHome from "../components/buttons/ButtonHome.tsx";
import {Slide} from "../types/slide.ts";

function AddSlide() {
    const {SlideId} = useParams<string>();
    // const currentSlide = getSlide();
    const slideTemplate: Slide = {
        id: "1",
        presentation: "afafafd",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit semper magna, sed scelerisque enim tincidunt ut. In libero dui, consectetur sed ante convallis, egestas placerat massa. Nulla sed semper massa. Vivamus dictum facilisis neque. Sed luctus massa eget mauris fermentum cursus. Suspendisse vulputate est lacus, vel elementum sapien suscipit sit amet. Aenean volutpat tortor quis mauris cursus dapibus. Proin vel sagittis ipsum, ac molestie orci. Suspendisse porta, odio id efficitur auctor, libero purus ullamcorper metus, et convallis lectus lorem quis nunc. Vestibulum vitae turpis massa. Integer auctor et dolor a elementum. Vivamus iaculis tempor urna, in sollicitudin lectus elementum quis. Sed at nisi vel elit congue porta.",
        headline: "Head Line",
        style: {
            fontSize: 1,
            fontWeight: "bold",
            fontColor: "red-400",
        }
    }

    return (
        <Background className="flex flex-col justify-center items-center gap-5 relative">
            <div className="h-5/6 w-full flex flex-row justify-center items-center ">
                <div
                    className="relative laptop:w-9/12 h-full bg-white rounded-[3rem] border-2 border-black drop-shadow-5xl flex flex-col items-center justify-center">
                </div>
            </div>
            <ButtonHome className="laptop:absolute laptop:top-7 laptop:left-9 w-16 opacity-40 hover:opacity-80 active:opacity-100 duration-200 active:scale-110 " />
        </Background>
    );
}

export default AddSlide;