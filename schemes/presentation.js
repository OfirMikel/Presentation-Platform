import mongoose from 'mongoose'

const presentationSchema =  new mongoose.Schema({
    Title: String,
    AuthorsList: [String],
    DatePublished: Date,
})

const Presentation = mongoose.model('Presentation', presentationSchema);

export default Presentation;