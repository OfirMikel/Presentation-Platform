import Presentation from "../../schemes/presentation.js";

export default async function alterAuthors(req, res) {
    let {AuthorsList} = req.body;
    const Title = req.params.title;
    if (!Title) {
        return res.status(400).send("Title is required");
    }
    if (!AuthorsList) {
        AuthorsList = [];
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
        presentation  = await Presentation.findOne({Title: Title});
        console.log(`Updated the ${Title} presentation with the new AuthorsList`);
        res.status(201).json(presentation);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
}