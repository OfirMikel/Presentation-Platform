import Presentation from "../../schemes/presentation.js";

export default async function deletePresentation(req, res) {
    const Title = req.params.title;
    if (!Title) {
        return res.status(400).send("Title is required");
    }

    try {
        let presentation  =   await Presentation.deleteOne({Title: Title})
        if (presentation.deletedCount === 0) {
            return res.status(400).send("Presentation with this title does not exists from the first place");
        }

        console.log(`Deleted the ${Title} presentation`);
        res.status(201).send(`Deleted the ${Title} presentation`);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
}