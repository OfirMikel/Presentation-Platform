import getAllPresentations from "./get/getAllPresentations.js";
import addPresentation from "./post/addPresentation.js";
import addSlide from "./post/addSlide.js";
import getPresentationByTitle from "./get/getPresentationByTitle.js";
import alterAuthors from "./patch/alterAuthors.js";
import alterSlide from "./put/alterSlide.js";
import deletePresentation from "./delete/deletePresentation.js";
import deleteSlide from "./delete/deleteSlide.js";

/**
 * registering routes for Presentation management
 * @param app the express app.
 */
export default function routes (app){
    app.get('/presentations', async (req, res) => {
        await getAllPresentations(res);
    });

    app.get('/presentation/:title', async (req, res) => {
        await getPresentationByTitle(req,res);
    })

    app.post('/presentation', async (req, res) => {
        await addPresentation(req,res);
    });

    app.post('/slide', async (req, res) => {
        await addSlide(req,res);
    })

    app.patch('/presentation/authors/:title', async (req, res) => {
        await alterAuthors(req,res);
    })

    app.put('/slide/:id', async (req, res) => {
        await alterSlide(req,res);
    })

    app.delete('/presentation/:title', async (req, res) => {
        await deletePresentation(req,res);
    })

    app.delete('/slide/:id', async (req, res) => {
        await deleteSlide(req,res);
    })

}