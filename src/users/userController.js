import User from "./userModel.js";

const getAllUsers = async (req, res) => {
    const users = await User.findAll();
    res.status(200).json(users);
}

const postUser = async (req, res) => {
    const createUser = await User.create({
        name: "mihai",
        lastname: "daniel",
        email: "mihai@api.com",
        password: "mihai",
        phone_number: "687543223"
    });
    res.json(createUser);
}

export {postUser, getAllUsers}