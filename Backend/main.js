import express from 'express';
import dotenv from 'dotenv';
import routes from "./Routes/routes.js";
import connectDB from './DB/connectDB.js';
import cors from "cors";
import router from './Routes/upload-route.js';

dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 4001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/upload", express.static("uploads"));

connectDB();

app.set('views', "Template");
app.set('view engine', "ejs");
app.use(routes);
app.use(router);

app.listen(PORT, () => {
    console.log(`Your site is live on http://localhost:${PORT}`);
});