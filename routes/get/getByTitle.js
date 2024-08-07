import Presentation from "../../schemes/presentation.js";


export default function getAllPresentations(app) {
    app.get('/presentations/:id', async (req, res) => {
        try {
            const presentations = await Presentation.findOne({Title: req.body.Title});
            res.status(200).json(presentations);
            console.log("received all presentations");
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });
}

