import React from 'react';
import {NavLink, useNavigate, useRouteError} from "react-router-dom";
import Background from "../background/Background.tsx";
import TextExo2Font from "../typography/TextExo2Font.tsx";
import image from "../../assets/computer.png"

function Error() {
    return (
        <Background className="flex items-center justify-center">
            <div className="flex items-center justify-center flex-col gap-10 bg-white rounded-3xl p-20 drop-shadow-xl">
                <TextExo2Font className="text-5xl">ERROR OCCURRED</TextExo2Font>
                <img src={image} className="w-52" alt="image of network - an error OCCURRED"/>
                <NavLink to={"/"} className="border-black border rounded-[2rem]  drop-shadow-lg bg-white hover:text-white hover:bg-light-red  transition-all duration-300">
                    <div className="p-5" >
                        <TextExo2Font className="text-xl font-extrabold ">Return Home</TextExo2Font>
                    </div>

                </NavLink>
            </div>
        </Background>
    );
}

export default Error;