import express from "express";
import env from "dotenv";

const app = express();

//Environment vars
env.config();

//Parse body to JSON
app.use(express.json());

// Express port definition and server up
app.set("port", 4000);
app.listen(app.get("port"), () => console.log("Server up at 4000"))