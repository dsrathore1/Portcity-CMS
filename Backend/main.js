import express from 'express';
import dotenv from 'dotenv';
import routes from "./Routes/routes.js";
import connectDB from './DB/connectDB.js';
import expressSession from "express-session";
import passport from 'passport';
import cors from "cors";

dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 4001;

const app = express();

//! This will allow to the session to create on server.
app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: "helloWorld123@gmail.com"
}));


//! This will actual create the session on the server.
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());
app.use(express.json());

connectDB();

app.use(routes);


app.get("/", (req, res) => {
    res.send("<h1>Welcome to Home Page</h1>");
});

app.listen(PORT, () => {
    console.log(`Your site is live on http://localhost:${PORT}`);
});