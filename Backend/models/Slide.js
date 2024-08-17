import mongoose from 'mongoose'

const slideSchema =  new mongoose.Schema({
    presentation: String,
    content: String,
    style: {
        "fontSize": Number,
        "fontColor": String,
        "fontWeight": String
    },
    page:Number,
    headline: String,
})

const Slide = mongoose.model('slide', slideSchema);

export default Slide;
