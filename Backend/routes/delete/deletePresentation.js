import Presentation from "../../models/Presentation.js";

/**
 * Deletes a presentation by its Title.
 *
 * @param {Object} req - The request object, containing `params.title` as the presentation title.
 * @param {Object} res - The response object used to send the status and response message.
 *
 * @throws {Error} If the deletion operation fails.
 */
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