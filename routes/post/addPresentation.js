import Presentation from "../../models/Presentation.js";

/**
 * Adds a new presentation to the database.
 *
 * @param req - The request object containing the presentation data in `body`.
 * @param res - The response object used to send the status and response message.
 * @throws Error If the presentation with the given title already exists or if the creation operation fails.
 */
export default async function addPresentation(req, res) {
    let {Title, AuthorsList, DatePublished} = req.body;
    if (!Title) {
        return res.status(400).send("Title is required");
    }
    if (!AuthorsList) {
        AuthorsList = [];
    }
    if (!DatePublished) {
        DatePublished = Date.now();
    }
    try {
        if (await Presentation.findOne({ Title: Title })) {
            return res.status(400).json({error: "Presentation with this title already exists"});
        }
        const newPresentation = await Presentation.create({
            Title: Title,
            AuthorsList: AuthorsList,
            DatePublished: DatePublished
        });
        res.status(200).json(newPresentation);
        console.log("Added Presentation");
    } catch (err) {
        res.status(400).json({error: err.message});
    }
}