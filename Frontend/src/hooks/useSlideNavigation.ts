import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Presentation} from "../types/presentation";
import {Slide} from "../types/slide.ts";
import {getPresentation} from "../services/presentationApi.ts"; // Update paths accordingly

interface UseSlideNavigation {
    currentSlide: Slide | null;
    loading: boolean;
    error: string | null;
    presentation: Presentation | null;
    setPresentation: React.Dispatch<React.SetStateAction<Presentation | null>>;
}

/**
 * React Custom Hook for the slide navigation allow to manage the slide carousel easier
 * implemented optimization so that only when there is presentation that was given from the
 * home page no need to call the server again
 */
export function useSlideNavigation(): UseSlideNavigation {
    const { title, page } = useParams<{ title: string; page: string }>();
    const [presentation, setPresentation] = useState<Presentation | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const location = useLocation();
    const pageNumber = parseInt(page ? page : "0");
    useEffect(() => {
        const fetchPresentation = async () => {
            try {
                setLoading(true);
                const data = await getPresentation(title? title : "");
                console.log(data)
                setPresentation(data);
            } catch (err) {
                setError("Failed to fetch presentation data.");
            } finally {
                setLoading(false);
            }
        };

        if (location.state?.presentation) {
            setPresentation(location.state.presentation);
            setLoading(false);
        } else {
            fetchPresentation();
        }
    }, [title, location.state]);

    const currentSlide = presentation ? presentation.presentationSlides[pageNumber - 1] : null;
    if (pageNumber === 0) {

    }

    return {
        currentSlide,
        loading,
        error,
        presentation,
        setPresentation
    };
}