import getAllPresentations from "./get/getAllPresentations.js";
import addPresentation from "./post/postPresentation.js";

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

    app.get('/presentation/:title', async (req, res) => {
        await getByTitle(req,res);
    })

}