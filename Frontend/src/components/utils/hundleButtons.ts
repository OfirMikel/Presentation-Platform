import { NavigateFunction } from "react-router-dom";
import { Presentation } from "../../types/presentation"; // Update paths accordingly

export function goToNextSlide(
    currentPage: number,
    presentation: Presentation,
    navigate: NavigateFunction
) {
    const nextPage = currentPage + 1 > presentation.presentationSlides.length ? 1 : currentPage + 1;
    navigate(`/presentation/${presentation.Title}/${nextPage}`, { state: { presentation } });
}

export function goToPreviousSlide(
    currentPage: number,
    presentation: Presentation,
    navigate: NavigateFunction
) {
    const prevPage = currentPage - 1 < 1 ? presentation.presentationSlides.length : currentPage - 1;
    navigate(`/presentation/${presentation.Title}/${prevPage}`, { state: { presentation } });
}