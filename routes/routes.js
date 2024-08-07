import getAllPresentations from "./get/getAllPresentations.js";
import addPresentation from "./post/postPresentation.js";
import addSlide from "./post/postSlide.js";
import getByTitle from "./get/getByTitle.js";
import alterAuthors from "./patch/patchAuthors.js";
import alterSlide from "./patch/patchSlide.js";
import deletePresentation from "./delete/deletePresentation.js";
import deleteSlide from "./delete/deleteSlide.js";

export default function routes (app){
    app.get('/presentations', async (req, res) => {
        await getAllPresentations(res);
    });

    app.get('/presentation/:title', async (req, res) => {
        await getByTitle(req,res);
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

    app.patch('/slide/:id', async (req, res) => {
        await alterSlide(req,res);
    })

    app.delete('/presentation/:title', async (req, res) => {
        await deletePresentation(req,res);
    })

    app.delete('/slide/:id', async (req, res) => {
        await deleteSlide(req,res);
    })
}