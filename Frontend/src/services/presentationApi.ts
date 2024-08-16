const base_url = "http://localhost:3000";


export async function getAllPresentations() {
    try {
        var requestOptions = {
            method: 'GET',
        };

        const res = await fetch(`${base_url}/presentations` , requestOptions);
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