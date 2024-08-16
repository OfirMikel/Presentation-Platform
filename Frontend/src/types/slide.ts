export interface Slide {
    id: string,
    presentation: string | undefined,
    content: string,
    style:Style,
    headline: string
}

interface Style {
    fontSize: number,
    fontWeight: string,
    fontColor: string,
}