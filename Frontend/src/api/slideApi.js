export async function getSlide({title,page}) {
    const res = await fetch(`/api/${title}`)
    if (!res.ok) throw new Error(`${title} not found`)

    const data = await res.json();
    return data;
}