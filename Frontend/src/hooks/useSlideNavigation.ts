import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Presentation} from "../types/presentation";
import {Slide} from "../types/slide.ts"; // Update paths accordingly

interface UseSlideNavigation {
    currentSlide: Slide | null;
    loading: boolean;
    error: string | null;
    presentation: Presentation | null;
    currentPage: number;
}

export function useSlideNavigation(): UseSlideNavigation {
    const { title, page } = useParams<{ title: string; page: string }>();
    const [currentPage, setCurrentPage] = useState(parseInt(page ? page : "1"));
    const [presentation, setPresentation] = useState<Presentation | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const location = useLocation();

    useEffect(() => {
        const fetchPresentation = async () => {
            try {
                setLoading(true);
                const response = await fetch(`/api/presentation/${title}`);
                const data = await response.json();
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

    const currentSlide = presentation ? presentation.presentationSlides[currentPage - 1] : null;

    return {
        currentSlide,
        loading,
        error,
        presentation,
        currentPage
    };
}