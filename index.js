import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
// Middleware to parse JSON bodies
// mongoose.connect(`mongodb://localhost:${process.env.MONGODB_URL}`,{});

app.use(bodyParser.json({type: 'application/*+json'}))


app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});