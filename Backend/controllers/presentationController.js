import getAllPresentations from "./presentationMethods/getAllPresentations.js";
import getPresentationByTitle from "./presentationMethods/getPresentationByTitle.js";
import addPresentation from "./presentationMethods/addPresentation.js";
import alterAuthors from "./presentationMethods/alterAuthors.js";
import deletePresentation from "./presentationMethods/deletePresentation.js";

export default{
    getAllPresentations: async (req, res) => {
        await getAllPresentations(res);
    },
    getPresentationByTitle: async (req, res) => {
        await getPresentationByTitle(req,res);
    },
    addPresentation: async (req, res) => {
        await addPresentation(req,res);
    },
    patchAuthors: async (req, res) => {
        await alterAuthors(req,res);
    },
    delete: async (req, res) => {
        await deletePresentation(req,res);
    }
}