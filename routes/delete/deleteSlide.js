import Slide from "../../schemes/slide.js";


export default async function deleteSlide(req, res) {
    const id = req.params.id;
    if (!id) {
        return res.status(400).send("id is required");
    }

    try {

        let presentation = await Slide.deleteOne({_id: id})
        console.log(presentation);

        if (presentation.deletedCount == 0) {
            return res.status(400).send("Slide with this Id does not exists");
        }
        res.status(201).send(`Deleted the ${id} presentation`);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
}