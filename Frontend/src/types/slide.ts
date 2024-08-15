export interface Slide {
    id: string,
    presentation: string,
    content: string,
    style:Style
}

interface Style {
    fontSize: number,
    fontWeight: string,
    fontColor: string,
}