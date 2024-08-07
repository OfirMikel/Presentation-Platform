import mongoose from 'mongoose'

const slideSchema =  new mongoose.Schema({
    presentation: String,/*The Title of the presentation*/
    content: String,
    style: {
        "fontSize": Number,
        "fontColor": String,
        "fontWeight": String
    },
})

const Slide = mongoose.model('slide', slideSchema);

export default Slide;