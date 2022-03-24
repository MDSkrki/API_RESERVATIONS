import express from "express";
import env from "dotenv";
import dbConnection from "./config/mysqlDB.js";

const app = express();

//Environment vars
env.config();

//Parse body to JSON
app.use(express.json());

// Express port definition and server up
app.set("port", process.env.PORT);
app.listen(app.get("port"), () => console.log(`Server up at ${process.env.PORT}`));
dbConnection();