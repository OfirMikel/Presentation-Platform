import presentationController from "../controllers/presentationController.js";
import slideController from "../controllers/slideController.js";

/**
 * registering routes for Presentation management
 * @param app the express app.
 */
export default function routes (app){
    app.get('/presentations', presentationController.getAllPresentations);

    app.get('/presentation/:title', presentationController.getPresentationByTitle);

    app.post('/presentation', presentationController.addPresentation);

    app.patch('/presentation/authors/:title', presentationController.patchAuthors)

    app.delete('/presentation/:title', presentationController.delete)

    app.post('/slide', slideController.addSlide)

    app.put('/slide/:id', slideController.alterSlide)

    app.delete('/slide/:id', slideController.deleteSlide)

}