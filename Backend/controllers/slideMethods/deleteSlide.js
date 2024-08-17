import Slide from "../../models/Slide.js";
import Presentation from "../../models/Presentation.js";

/**
 * Deletes a Slide by its ID.
 *
 * @param {Object} req - The request object, containing `params.id` as the presentation title.
 * @param {Object} res - The response object used to send the status and response message.
 *
 * @throws {Error} If the deletion operation fails.
 */
export default async function deleteSlide(req, res) {
    const id = req.params.id;
    if (!id) {
        return res.status(400).send("id is required");
    }

    try {
        let currentSlide = await Slide.findOne({_id:id})
        if (!currentSlide) {
            return res.status(404).send("Slide with this id does not exists");
        }
        await removeAndFixPagesForSlide(currentSlide);
        await Slide.deleteOne({_id: id})

        res.status(201).send(`Deleted the ${id} presentation`);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
}

/**
 *
 * @param currentSlide the slide currently wanting to be deleted
 */
async function removeAndFixPagesForSlide(currentSlide) {
    const { presentation, page } = currentSlide;

    const slidesToUpdate = await Slide.find({
        presentation: currentSlide.presentation, // use the string representation directly
        page: { $gt: page }
    });

    const updatePromises = slidesToUpdate.map(slide => {
        return Slide.updateOne({ _id: slide._id }, { $inc: { page: -1 } });
    });

    await Promise.all(updatePromises);

    await Presentation.updateOne(
        { Title: presentation }, // convert to ObjectId for the query
        { $pull: { SlidesId: currentSlide._id.toString() } } // ensure _id is a string in the array
    );
}

