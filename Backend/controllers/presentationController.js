import getAllPresentations from "../routes/get/getAllPresentations.js";
import getPresentationByTitle from "../routes/get/getPresentationByTitle.js";
import addPresentation from "../routes/post/addPresentation.js";
import alterAuthors from "../routes/patch/alterAuthors.js";
import deletePresentation from "../routes/delete/deletePresentation.js";

export default {
    getAll: async (req, res) => {
        await getAllPresentations(res);
    },
    get: async (req, res) => {
        await getPresentationByTitle(req,res);
    },
    post: async (req, res) => {
        await addPresentation(req,res);
    },
    patchAuthors: async (req, res) => {
        await alterAuthors(req,res);
    },
    delete:async (req, res) => {
        await deletePresentation(req,res);
    }
}