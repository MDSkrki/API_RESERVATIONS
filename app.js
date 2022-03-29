import express from "express";
import env from "dotenv"; // Environment vars
import { dbConnection } from "./config/mysqlDB.js"; // DB connection with sequelize
import routerUser from "./src/user/userRoute.js"; // User routes
import routerDoctor from "./src/doctor/doctorRoute.js"; // Doctor routes
import routerVisit from './src/visit/visitRoute.js';
import routerPatient from './src/patient/patientRoute.js';

const app = express();

//Environment vars
env.config();

//Parse body to JSON
app.use(express.json());

const myGithub = "https://github.com/AlexMonPe/API_RESERVATIONS/blob/master/README.md"
const text = "documentation"
// Welcome Endpoint
app.get('/', (req,res)=> res.send('Welcome to our API_reservations, read ' + text.link(myGithub) + ' to start'))
//Endpoints
app.use("/user", routerUser);
app.use("/doctor", routerDoctor); // meter aqui el auth Doctor
app.use('/visit', routerVisit);
app.use('/patient', routerPatient);
app.use('/user', routerUser);


// Express port definition and server up
app.set("port", process.env.PORT);
app.listen(app.get("port"), () =>
  console.log(`Server up at ${process.env.PORT}`)
);
dbConnection();
