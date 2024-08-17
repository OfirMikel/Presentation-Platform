import {NavigateFunction} from "react-router-dom";
import {Presentation} from "../types/presentation.ts";
import {Slide} from "../types/slide.ts";
import {deleteSlide} from "../services/slideApi.ts"; // Update paths accordingly

export function goToNextSlide(
    presentation: Presentation,
    navigate: NavigateFunction,
    currentSlide: Slide | null
) {
    if(!currentSlide && presentation.presentationSlides.length === 0){
        alert("No Presentation slides yet");
    }
    if (!currentSlide) {
        navigate(`/presentation/${presentation.Title}/${1}`, {state: {presentation}});
        return;
    }

    const nextPage = currentSlide.page + 1 > presentation.presentationSlides.length ? 0 : currentSlide.page + 1;
    navigate(`/presentation/${presentation.Title}/${nextPage}`, {state: {presentation}});
}

export function goToPreviousSlide(
    presentation: Presentation,
    navigate: NavigateFunction,
    currentSlide: Slide | null
) {
    if(!currentSlide && presentation.presentationSlides.length === 0){
        alert("No Presentation slides yet");
    }
    if (!currentSlide) {
        const prevPage = presentation.presentationSlides.length;
        navigate(`/presentation/${presentation.Title}/${prevPage}`, {state: {presentation}});
        return;
    }
    const prevPage = currentSlide.page - 1 < 0 ? presentation.presentationSlides.length : currentSlide.page - 1;
    navigate(`/presentation/${presentation.Title}/${prevPage}`, {state: {presentation}});
}
export async function handleDeleteSlide(currentSlide: Slide,
                                 presentation:Presentation,
                                 setPresentation: React.Dispatch<React.SetStateAction<Presentation | null>>) {
    await deleteSlide(currentSlide);

    const updatedSlides = presentation.presentationSlides.filter(slide => slide._id !== currentSlide._id);
    const updatedSlidesId = presentation.SlidesId.filter(id => id !== currentSlide._id);

    const updatedPresentation = {
        ...presentation,
        presentationSlides: updatedSlides,
        SlidesId: updatedSlidesId,
    };

    setPresentation(updatedPresentation);

}
