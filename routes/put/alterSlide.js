import Slide from "../../models/Slide.js";

/**
 * Updates an existing slide with new information.
 * @param  req - The request object containing the new slide data in `body` and the slide ID in `params.id`.
 * @param  res - The response object used to send the status and response message.
 * @throws Error If the slide with the specified ID does not exist or if the update operation fails.
 */
export default async function alterSlide(req, res) {
    let {presentation, content, style} = req.body;
    const id = req.params.id;

    if (!id) {
        return res.status(400).send("id is required");
    }

    try {
        let slideById  = await Slide.findOne({_id: id});
        if (!slideById) {
            return res.status(400).send("Slide with this id does not exists");
        }
        await Slide.updateOne({_id: id}, {
            $set: {
                presentation: presentation || slideById.presentation,
                content: content || slideById.content,
                style: style || slideById.style,
            },
        })
        console.log(`Updated the ${id} slide with the new information`);
        res.status(201).send(`Updated the ${id} slide with the new information`);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
}