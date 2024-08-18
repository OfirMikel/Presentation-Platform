import React, { useState } from 'react';
import { addPresentation } from "../services/presentationApi.ts";
import Background from "../components/background/Background.tsx";
import TextExo2Font from "../components/typography/TextExo2Font.tsx";
import { Presentation } from "../types/presentation.ts";
import { useNavigate } from "react-router-dom";
import ButtonHome from "../components/buttons/ButtonHome.tsx";

/**
 * The add presentation allow to create presentation
 * @constructor
 */
function AddPresentation() {
    const [title, setTitle] = useState('');
    const [authorsList, setAuthorsList] = useState<string[]>(['']);
    const [error, setError] = useState(false); // State to track error
    const navigate = useNavigate();

    const handleAuthorChange = (index: number, value: string) => {
        const newAuthorsList = [...authorsList];
        newAuthorsList[index] = value;
        setAuthorsList(newAuthorsList);
    };

    const handleAddAuthor = () => {
        setAuthorsList([...authorsList, '']);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newPresentation: Presentation = {
            Title: title,
            AuthorsList: authorsList,
            DatePublished: new Date(),
            SlidesId: [],
            presentationSlides: [],
        };
        const isAdded = await addPresentation(newPresentation, navigate);
        if (!isAdded) {
            setError(true); // Trigger error state
            setTimeout(() => setError(false), 1000); // Remove error state after 1 second
        }
    };

    return (
        <Background className="flex items-center flex-col justify-center min-h-dvh gap-5">
            <ButtonHome
                className="laptop:absolute laptop:top-7 laptop:left-9 w-16 opacity-40 hover:opacity-80
                 active:opacity-100 duration-200 active:scale-110"/>
            <TextExo2Font className="text-3xl font-bold">Create New Presentation</TextExo2Font>
            <form onSubmit={handleSubmit}
                  className={`bg-white p-16 rounded-3xl items-center justify-center flex gap-3 flex-col max-w-md mx-auto drop-shadow-5xl
                  ${error ? 'animate-shake border-4 border-red-500' : ''} transition-all duration-300`}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    className="border p-2 rounded w-full"
                    required
                />

                <div className="w-full">
                    {authorsList.map((author, index) => (
                        <input
                            key={index}
                            type="text"
                            value={author}
                            onChange={(e) => handleAuthorChange(index, e.target.value)}
                            placeholder={`Author ${index + 1}`}
                            className="border p-2 rounded my-2 w-full"
                            required
                        />
                    ))}
                </div>

                <button type="button" onClick={handleAddAuthor}
                        className="border border-black rounded-full drop-shadow-lg bg-white hover:text-white hover:bg-light-red  transition-all duration-300">
                    <div className="p-5">
                        <TextExo2Font className="text-xs font-extrabold ">Add Author</TextExo2Font>
                    </div>
                </button>

                <button type="submit"
                        className=" mt-5 border border-black rounded-[2rem]
                         drop-shadow-lg bg-white hover:text-white hover:bg-light-red  transition-all duration-300">
                    <div className="p-5">
                        <TextExo2Font className="text-lg font-extrabold ">Submit Presentation</TextExo2Font>
                    </div>
                </button>
            </form>
        </Background>
    );
}

export default AddPresentation;