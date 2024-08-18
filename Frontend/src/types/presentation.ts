import {Slide} from "./slide.ts";

/**
 * Presentation type
 */
export interface Presentation{
    id?: string,
    Title: string,
    AuthorsList: string[],
    DatePublished: Date,
    SlidesId: string[],
    presentationSlides: Slide[]
}