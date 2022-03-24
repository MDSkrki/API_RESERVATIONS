import User from "./userModel.js";

export const getAllUsers = async (req, res) => {
    const users = await User.findAll();
    res.status(200).json(users);
}

export const postUser = async (req, res) => {
    const createUser = await User.create({
        name: "mihai",
        lastname: "daniel",
        email: "mihai@api.com",
        password: "mihai",
        phone_number: "687543223"
    });
    res.json(createUser);
}