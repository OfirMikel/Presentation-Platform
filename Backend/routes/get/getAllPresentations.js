import Presentation from "../../models/Presentation.js";
import Slide from "../../models/Slide.js";


/**
 * Fetches all presentations and slides from the database, combines them into a single response where each
 * presentation includes its associated slides, and sends the result as a JSON response.
 * @param res the response from express app
 * @returns {Promise<*>} array of presentations objects.
 */
export default async function getAllPresentations(res) {
    try {
        const presentations = await Presentation.find();
        if (!presentations) {
            return res.status(200).send("There is no presentations in the DataBase ");
        }
        const slides = await Slide.find();

        res.status(200).json(mapSlidesToPresentations(presentations, slides));
        console.log("received all presentations");
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

/**
 * This function takes an array of presentations and an array of slides,
 * and returns a new array of presentations where each presentation object
 * includes an additional field presentationSlides.
 * @param presentations An array of presentation objects.
 * @param slides An array of presentation objects
 * @returns array of presentations where each presentation object with is current slides.
 */
function mapSlidesToPresentations(presentations, slides) {
    return presentations.map(presentation => {
        const presentationSlides = slides.filter(slide => slide.presentation === presentation.Title);
        return {
            ...presentation.toObject(), // Convert Mongoose document to plain object
            presentationSlides: presentationSlides
        };
    });
}
