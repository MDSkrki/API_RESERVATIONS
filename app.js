import express from "express";
import env from "dotenv";
import { dbConnection } from "./config/mysqlDB.js";
import routerUser from "./src/users/userRoute.js"; // User route

const app = express();

//Environment vars
env.config();

//Parse body to JSON
app.use(express.json());

//Endpoints
app.use("/user", routerUser);

// Express port definition and server up
app.set("port", process.env.PORT);
app.listen(app.get("port"), () =>
  console.log(`Server up at ${process.env.PORT}`)
);
dbConnection();
