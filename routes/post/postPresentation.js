import Presentation from "../../schemes/presentation.js";

export default async function addPresentation(req , res) {
    try {
        const newPresentation = await Presentation.create(req.body);
        res.status(201).json(newPresentation);
        console.log("Added Presentation");
    } catch (err) {
        res.status(400).json({error: err.message});
    }
}