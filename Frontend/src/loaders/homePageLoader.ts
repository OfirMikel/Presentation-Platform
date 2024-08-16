import {getAllPresentations} from "../services/presentationApi.ts";

export async function homePageLoader(){
    const presentations = await getAllPresentations();
    console.log(presentations);
    return presentations;
}