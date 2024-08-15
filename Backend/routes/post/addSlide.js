import Slide from "../../models/Slide.js";
import Presentation from "../../models/Presentation.js";

/**
 * Adds a new slide to a specified presentation.
 *
 * @param req - The request object containing the slide data in `body`.
 * @param res - The response object used to send the status and response message.
 * @throws Error If the specified presentation does not exist or if the creation operation fails.
 *
 */
export default async function addSlide(req, res) {
    let {presentation, content, style} = req.body;
    if (!presentation) {
        return res.status(400).send("presentation title is required");
    }
    let slidePresentation = await Presentation.findOne({ Title: presentation });
    if (!slidePresentation) {
        return res.status(400).json({error: "Presentation with this title does not exists"});
    }
    if (!style) {
        style = {
            "fontSize": 0,
            "fontColor": "",
            "fontWeight": ""
        };
    }
    if (!content) {
        content = "";
    }
    try {
        const newSlide = await Slide.create({
            presentation: presentation,
            content: content,
            style: style,
            page:slidePresentation.SlidesId.length + 1
        });
        await Presentation.updateOne({Title: presentation}, {
            $set: {
                SlidesId: [...slidePresentation.SlidesId , newSlide.id ]
            },
        })
        res.status(201).json(newSlide);
        console.log("Added Slide");
    } catch (err) {
        res.status(400).json({error: err.message});
    }
}