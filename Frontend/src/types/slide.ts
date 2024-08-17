export interface Slide {
    _id: string,
    presentation: string | undefined,
    content: string,
    style:Style,
    headline: string,
    page: number
}

interface Style {
    fontSize: number,
    fontWeight: string,
    fontColor: string,
}