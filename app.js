import express from "express";
import env from "dotenv"; // Environment vars
import { dbConnection } from "./config/mysqlDB.js"; // DB connection with sequelize
import routerUser from "./src/users/userRoute.js"; // User routes
import routerDoctor from "./src/doctor/doctorRoute.js"; // Doctor routes

const app = express();

//Environment vars
env.config();

//Parse body to JSON
app.use(express.json());

//Endpoints
app.use("/user", routerUser);
app.use("/doctor", routerDoctor);

// Express port definition and server up
app.set("port", process.env.PORT);
app.listen(app.get("port"), () =>
  console.log(`Server up at ${process.env.PORT}`)
);
dbConnection();
