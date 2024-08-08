import Presentation from "../../models/Presentation.js";
import Slide from "../../models/Slide.js";

/**
 * Fetches presentation and slides by presentation title from the database,
 * combines them into a single response where each and sends the result as a JSON response.
 * @param req The request object, containing `params.title` as the presentation title.
 * @param res The response from express app
 * @returns {Promise<*>} Presentations object.
 */
export default async function getPresentationByTitle(req, res) {
    const Title = req.params.title;

    if (!Title) {
        return res.status(400).send("Title is required");
    }
    try {
        const presentation = await Presentation.findOne({Title: Title});
        if (!presentation) {
            return res.status(404).send("Presentation with this title does not exist in the Data Base");
        }
        const slidesOfPresentation = await Slide.find({presentation: req.params.title})
        res.status(200).json({...presentation.toObject(), presentationSlides: slidesOfPresentation});
        console.log(`received presentation with title: ${req.params.title}`);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}