import express from "express";
import migration from "./Database/models";
import bodyParser from "body-parser";
import morgan from "morgan";
import dotenv from "dotenv";

import auth_Routes from "./API/User/auth_Routes";

dotenv.config();
const app = express();

// Log all requests to file, but errors to console
app.use(morgan("dev"));

app.use(bodyParser.urlencoded({ "extended": false }));
app.use(bodyParser.json());

// Définition des CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Authorization, Content-Type");
    res.header(
        "Access-Control-Allow-Methods",
        "POST, GET, PUT, DELETE, OPTIONS"
    );
    next();
});

// Index Route

app.use(express.static(`${process.cwd()}/public`));

app.use("/api/users", auth_Routes);

// error handler
app.use((req, res, next) => {
    let err = new Error("Not Found");

    err.status = 404;
    next(err);
});

app.use((err, req, res) => {
    res.status(err.status || 500);
    res.render("error", {
        "message": err.message,
        "error": {}
    });
});

// Connect to Database
migration.connection
    .authenticate()
    .then(() => console.log("database connected..."))
    .catch((err) => console.log(`Error:${err}`));

export default app;
