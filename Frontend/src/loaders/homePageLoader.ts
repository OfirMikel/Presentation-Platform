import {getAllPresentations} from "../services/presentationApi.ts";

/**
 * Loader for the home page - implemented for react router dom loader function
 */
export async function homePageLoader(){
    const presentations = await getAllPresentations();
    console.log(presentations);
    return presentations;
}