import addSlide from "./slideMethods/addSlide.js";
import alterSlide from "./slideMethods/alterSlide.js";
import deleteSlide from "./slideMethods/deleteSlide.js";

export default {
    addSlide: async (req, res) => {
        await addSlide(req, res);
    },
    alterSlide: async (req, res) => {
        await  alterSlide(req,res)
    },
    deleteSlide: async (req, res) => {
        await deleteSlide(req,res);
    }
}