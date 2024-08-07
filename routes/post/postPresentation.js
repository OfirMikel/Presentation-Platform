import Presentation from "../../schemes/presentation.js";

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
        res.status(201).json(newPresentation);
        console.log("Added Presentation");
    } catch (err) {
        res.status(400).json({error: err.message});
    }
}