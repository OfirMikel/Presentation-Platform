import Presentation from "../../models/Presentation.js";

/**
 * The method alter authors list in a specified presentation object.
 * @param req the req.body must include the new authors list and the req.params must include title.
 * @param res the express app res
 * @returns {Promise<*>} the new updated
 */
export default async function alterAuthors(req, res) {
    let { AuthorsList } = req.body;
    const Title = req.params.title;

    if (!Title) {
        return res.status(400).send("Title is required");
    }

    if (!AuthorsList) {
        return res.status(400).send("Author list is required");
    }

    if (!Array.isArray(AuthorsList)) {
        return res.status(400).send("Authors list must be an array");
    }

    if (!AuthorsList.every(author => typeof author === 'string')) {
        return res.status(400).send("Authors list must be an array of strings");
    }
    console.log(AuthorsList)
    if (AuthorsList.length === 0) {
        return res.status(400).send("Authors list cannot be empty");
    }

    try {
        let presentation  = await Presentation.findOne({Title: Title});
        if (!presentation) {
            return res.status(400).send("Presentation with this title does not exists");
        }
        await Presentation.updateOne({Title: Title}, {
            $set: {
                AuthorsList: AuthorsList
            },
        })
        console.log(`Updated the ${Title} presentation with the new AuthorsList`);
        res.status(201).send(`Updated the ${Title} presentation with the new AuthorsList`);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
}