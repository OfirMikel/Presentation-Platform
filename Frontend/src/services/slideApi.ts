import {NavigateFunction} from "react-router-dom";
import {Slide} from "../types/slide.ts";
const base_url = "http://localhost:3000";

export async function deleteSlide(currentSlide: Slide ) {
    try {
        const response = await fetch(`${base_url}/slide/${currentSlide._id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Failed to delete presentation');
        }
    } catch (error) {
        console.error('Error:', error);
        alert(error);
    }
}

export async function alterSlide(slide :Slide , title:string , navigate: NavigateFunction) {
    try {
        const res = await fetch(`${base_url}/slide/${slide._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                presentation:title,
                content:slide.content,
                style:slide.style,
                headline:slide.headline
            }),
        });
        if (!res.ok) {
            const errorData = await res.json();
            if (errorData.error) {
                alert(errorData.error);
            } else {
                throw new Error(errorData.error || 'Failed to submit new slide');
            }
            return false;
        }

        navigate("/");
        return true;

    } catch (error) {
        alert(error);
        return false;
    }
}

export async function addSlide(slide :Slide , title:string , navigate: NavigateFunction) {
    try {

        console.log(slide.content)
        const res = await fetch(`${base_url}/slide`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                presentation:title,
                content:slide.content,
                style:slide.style,
                headline:slide.headline
            }),
        });
        console.log(res);
        if (!res.ok) {
            const errorData = await res.json();
            if (errorData.error) {
                console.error(errorData.error);
            } else {
                throw new Error(errorData.error || 'Failed to submit new slide');
            }
            return false;
        }

        navigate("/")
        return true;

    } catch (error) {
        console.error(error);
        return false;
    }
}