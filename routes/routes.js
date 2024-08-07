import getAllPresentations from "./get/getAllPresentations.js";
import addPresentation from "./post/postPresentation.js";
import addSlide from "./post/postSlide.js";

export default function routes (app){
    app.get('/presentations', async (req, res) => {
        await getAllPresentations(res);
    });

    app.post('/presentation', async (req, res) => {
        await addPresentation(req,res);
    });

    app.post('/slide', async (req, res) => {
        await addSlide(req,res);
    })
}