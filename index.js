import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Presentation from './schemes/presentation.js';

const app = express();
const port = 3000;

app.use(bodyParser.json({type: 'application/*+json'}))


mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.MONGOOSE_DB_NAME}`)
    .then(() =>
        app.listen(port, () => {
            console.log(`Server is running at http://localhost:${port}`);
        })
    );


app.get('/getAll', (req, res) => {
    res.send('Hello World!');
});


