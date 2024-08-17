import {Presentation} from "../types/presentation.ts";
import {NavigateFunction} from "react-router-dom";

const base_url = "http://localhost:3000";


export async function getAllPresentations() {
    try {
        var requestOptions = {
            method: 'GET',
        };

        const res = await fetch(`${base_url}/presentations`, requestOptions);
        console.log(res)
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
