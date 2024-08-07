import Presentation from "../../schemes/presentation.js";

/**
 *
 * @param res the res from express used to sent response ( the Presentations back)
 * @returns {Promise<void>} All the presentations in the database otherwise returns error message
 */
export default async function getAllPresentations(res) {
    try {
        const presentations = await Presentation.find();
        res.status(200).json(presentations);
        console.log("received all presentations");
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

