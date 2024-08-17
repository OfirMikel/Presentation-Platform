import Presentation from "../../models/Presentation.js";
import Slide from "../../models/Slide.js";

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
        let presentation  = await Presentation.findOne({Title: Title});
        if (!presentation) {
            return res.status(404).send("Presentation with this title does not exist");
        }

        await deletePresentationSlides(presentation , res);

        console.log(`Deleted the ${Title} Presentation and his Slides`);
        res.status(201).send(`Deleted the ${Title} presentation`);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
}

/**
 * Deletes all slides associated with a presentation by its title and the title itself.
 *
 * @throws {Error} If the deletion operation fails.
 */
async function deletePresentationSlides(presentation , res) {
    try {
        await Presentation.deleteOne({Title: presentation.Title});
        if (presentation.SlidesId.length === 0) {
            return;
        }
        await Slide.deleteMany({ _id: { $in: presentation.SlidesId } });

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}
