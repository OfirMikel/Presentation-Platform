import {Presentation} from "../types/presentation.ts";
import {NavigateFunction} from "react-router-dom";

const base_url = import.meta.env.VITE_BASE_URL;

/**
 * Get all presentation from the server
 */
export async function getAllPresentations() {
    try {
        var requestOptions = {
            method: 'GET',
        };

        const res = await fetch(`${base_url}/presentations`, requestOptions);
        if (!res.ok) {
            const errorText = await res.text();
            throw new Error(`Error ${res.status}: ${errorText}`);
        }
        return await res.json();
    } catch (error) {
        if (error instanceof Error) {
            console.error("Fetch error:", error.message);
            throw new Error(`Failed to fetch presentations: ${error.message}`);
        } else {
            console.error("Unexpected error:", error);
            throw new Error("An unexpected error occurred.");
        }
    }
}

/**
 * Get specific presentation from the api by title
 * @param title the title for the presentation
 */
export async function getPresentation(title: string) {
    try {
        var requestOptions = {
            method: 'GET',
        };
        const res = await fetch(`${base_url}/presentation/${title}`, requestOptions);
        if (!res.ok) {
            const errorText = await res.text();
            throw new Error(`Error ${res.status}: ${errorText}`);
        }
        return await res.json();
    } catch (error) {
        if (error instanceof Error) {
            console.error("Fetch error:", error.message);
            throw new Error(`Failed to fetch presentations: ${error.message}`);
        } else {
            console.error("Unexpected error:", error);
            throw new Error("An unexpected error occurred.");
        }
    }

}

/**
 * Adding presentation using the api
 * @param newPresentation the new presentation that need to be added
 * @param navigate navigation function
 */
export async function addPresentation(
                                      newPresentation: Presentation,
                                      navigate: NavigateFunction) {
    try {
        const res = await fetch(`${base_url}/presentation`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Title:newPresentation.Title,
                AuthorsList:newPresentation.AuthorsList
            }),
        });
        console.log(res);
        if (!res.ok) {
            const errorData = await res.json();
            if (errorData.error) {
                console.error(errorData.error);
            } else {
                throw new Error(errorData.error || 'Failed to submit presentation');
            }
            return false;
        }

        navigate("/")
        return true;

    } catch (error) {
        console.error('Error:', error);
        return false;
    }
}

/**
 * Delete presentation using the api
 * @param presentation the presentation need to be deleted
 * @param navigate navigation function
 * */
export async function deletePresentation(presentation: Presentation , navigate: NavigateFunction) {
    try {
        const response = await fetch(`${base_url}/presentation/${presentation.Title}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Failed to delete presentation');
        }

        navigate("/");

    } catch (error) {
        console.error('Error:', error);
        alert(error);
    }
}
