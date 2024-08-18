import {useState} from "react";
import {Slide} from "../types/slide.ts";
import React from 'react';
import Background from "../components/background/Background.tsx";
import TextExo2Font from "../components/typography/TextExo2Font.tsx";
import {useLocation, useNavigate, useNavigation, useParams} from "react-router-dom";
import Error from "../components/Errors/Error.tsx";
import ButtonHome from "../components/buttons/ButtonHome.tsx";
import {addSlide, alterSlide} from "../services/slideApi.ts";

/**
 * The add edit slide allow to change or create slide
 * @constructor
 */
function AddEditSlide() {
    const location = useLocation();
    let currSlide, edit;
    const navigate = useNavigate();
    const {title} = useParams();
    const [shake, setShake] = useState(false); // State to control shaking animation

    if (!location.state) {
        return <Error/>;
    }
    edit = location.state.edit;
    currSlide = location.state.currentSlide;

    if (!edit) {
        edit = false;
    }

    if (!currSlide) {
        currSlide = {
            _id: '',
            presentation: '',
            content: '',
            style: {
                fontSize: 0,
                fontWeight: 'font-normal',
                fontColor: 'text-black',
            },
            headline: '',
            page: 1,
        }
    }

    const [slide, setSlide] = useState<Slide>(currSlide);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setSlide(prevSlide => ({
            ...prevSlide,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let isOk =  true;
        if (edit) {
            isOk = await alterSlide(slide, title ? title : "", navigate);
        } else {
            isOk = await addSlide(slide, title ? title : "", navigate);
        }
        if (!isOk) {
            setShake(true);
            setTimeout(() => setShake(false), 500); // Reset after animation
        }
    };

    const textHeadLineAndButton = edit ? "Edit Slide" : "Create Slide"
    return (
        <Background className="flex flex-col justify-center items-center relative">
            <ButtonHome
                className="laptop:absolute laptop:top-7 laptop:left-9 w-16 opacity-40 hover:opacity-80
                 active:opacity-100 duration-200 active:scale-110"/>
            <TextExo2Font
                className="text-2xl p-5 font-bold text-center">{`${textHeadLineAndButton} in ${title}`}</TextExo2Font>
            <div
                className={`p-10 border border-black laptop:w-1/2 w-4/5 rounded-3xl bg-white drop-shadow-xl 
                ${shake ? 'animate-shake border-light-red' : ''}`}>
                <form onSubmit={handleSubmit} className="flex items-center justify-center flex-col gap-5">
                    <input
                        type="text"
                        name="headline"
                        placeholder="Headline"
                        value={slide.headline}
                        onChange={handleChange}
                        className="w-full border border-black rounded-2xl p-2"
                    />

                    <textarea
                        name="content"
                        placeholder="Content"
                        value={slide.content}
                        onChange={handleChange}
                        className="w-full min-h-60 border border-black rounded p-2"
                    />
                    <select
                        name="fontWeight"
                        className="w-full border border-black rounded-2xl p-2 desktop:w-1/2"
                        value={slide.style.fontWeight}
                        onChange={e => setSlide(prevSlide => ({
                            ...prevSlide,
                            style: {
                                ...prevSlide.style,
                                fontWeight: e.target.value,
                            },
                        }))}
                    >
                        <option value="" disabled>Font Weight</option>
                        <option value="font-thin">font-thin</option>
                        <option value="font-normal">font-normal</option>
                        <option value="font-semibold">font-semibold</option>
                        <option value="font-bold">font-bold</option>
                    </select>

                    <select
                        name="fontColor"
                        value={slide.style.fontColor}
                        className="w-full border border-black rounded-2xl p-2 desktop:w-1/2"
                        onChange={e => setSlide(prevSlide => ({
                            ...prevSlide,
                            style: {
                                ...prevSlide.style,
                                fontColor: e.target.value,
                            },
                        }))}
                    >
                        <option value="" disabled>Font Color</option>
                        <option value="text-red-300">Color red</option>
                        <option value="text-blue-300">Color blue</option>
                        <option value="text-green-300">Color green</option>
                        <option value="text-black">Color black</option>
                    </select>


                    <button type="submit"
                            className=" mt-5 border border-black rounded-[2rem]
                         drop-shadow-lg bg-white hover:text-white hover:bg-light-red active:scale-110 transition-all duration-300">
                        <div className="p-5">
                            <TextExo2Font className="text-lg font-extrabold ">{textHeadLineAndButton}</TextExo2Font>
                        </div>
                    </button>
                </form>
            </div>
        </Background>
    );
}

export default AddEditSlide;