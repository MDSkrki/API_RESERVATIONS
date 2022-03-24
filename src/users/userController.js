import User from "./src/users/userModel.js";

// Post user
app.post('/', async (req,res) => {
    const createUser = await User.create({
            name: "mihai",
            lastname: "daniel",
            email: "mihai@api.com",
            password: "mihai",
            phone_number: "687543223"
    })
res.json(createUser)
})