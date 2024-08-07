import express from 'express';
import mongoose from 'mongoose';

import routes from "./routes/routes.js";
const app = express();
const port = 3000;

app.use(express.json()); //adding the body parsing for post request

mongoose.connect(`mongodb://127.0.0.1:27017/project`)
    .then(() =>
        app.listen(port, () => {
            console.log(`Server is running at http://localhost:${port}`);
        })
);

routes(app);

