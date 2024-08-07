import Presentation from "../../schemes/presentation.js";

export default async function getByTitle(req, res) {
        try {
            const presentation = await Presentation.findOne({Title: req.params.title});
            res.status(200).json(presentation);
            console.log(`received presentation with title: ${req.params.title}`);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
}