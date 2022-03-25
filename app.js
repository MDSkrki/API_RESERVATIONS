import express from "express";
import env from "dotenv";
import {dbConnection} from "./config/mysqlDB.js";
import Doctor from "./src/doctor/doctorModel.js";
import User from "./src/users/userModel.js";

const app = express();

//Environment vars
env.config();

//Parse body to JSON
app.use(express.json());
app.get('/doctor', async (req,res) => {
    const query = await Doctor.findAll({
        include: [{model: User}]
    })
    res.json(query)
});
// Post user
app.post('/user', async (req,res) => {
    const createUser = await User.create({
            name: "mihai",
            lastname: "daniel",
            email: "mihai@api.com",
            password: "mihai",
            phone_number: "687543223"
    })
res.json(createUser)
})

// Express port definition and server up
app.set("port", process.env.PORT);
app.listen(app.get("port"), () => console.log(`Server up at ${process.env.PORT}`));
dbConnection();