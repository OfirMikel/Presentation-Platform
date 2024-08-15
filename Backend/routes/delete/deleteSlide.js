import Slide from "../../models/Slide.js";

/**
 * Deletes a Slide by its ID.
 *
 * @param {Object} req - The request object, containing `params.id` as the presentation title.
 * @param {Object} res - The response object used to send the status and response message.
 *
 * @throws {Error} If the deletion operation fails.
 */
export default async function deleteSlide(req, res) {
    const id = req.params.id;
    if (!id) {
        return res.status(400).send("id is required");
    }

    try {

        let presentation = await Slide.deleteOne({_id: id})
        if (presentation.deletedCount == 0) {
            return res.status(400).send("Slide with this Id does not exists");
        }

        res.status(201).send(`Deleted the ${id} presentation`);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
}