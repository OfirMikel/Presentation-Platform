import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import routes from "./routes/routes.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); //adding the body parsing for post request
mongoose.connect(`${process.env.MONGO_URI}`, {})
    .then(() =>
        app.listen(port, () => {
            console.log(`Server is running at http://localhost:${port}`);
        })
);

routes(app);

