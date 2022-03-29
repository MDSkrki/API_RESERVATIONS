import { User } from "../shared/models.js";
import { hasher, passChecker, tokenGenerator } from '../shared/services.js';

//Get Users by all fields
const getUser = async (req, res) => {
  try {
    const queryUser = {};
    if (req.query.id) queryUser.id = req.query.id;
    if (req.query.name) queryUser.name = req.query.name;
    if (req.query.lastname) queryUser.lastname = req.query.lastname;
    if (req.query.email) queryUser.email = req.query.email;
    if (req.query.role) queryUser.role = req.query.role;
    if (req.query.phone_number) queryUser.phone_number = req.query.phone_number;
    res.json(
      await User.findAll({
        where: queryUser,
      })
    );
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

// Post user
const postUser = async (req, res) => {
  try {
    const createUser = await User.create({
      name: req.body.name,
      lastname: req.body.lastname,
      email: req.body.email,
      password: await hasher(req.body.password),
      phone_number: req.body.phone_number,
    });
    res.json(createUser);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

// PATCH/UPDATE USER
const updateUser = async (req, res) => {
  try {
    if (await User.findByPk(req.params.id)) {
      await User.update(
        {
          name: req.body.name,
          lastname: req.body.lastname,
          email: req.body.email,
          password: req.body.password,
          phone_number: req.body.phone_number,
        },
        { where: { id: req.params.id } },
      );
      res.status(200).json("Updated id = " + req.params.id);
    } else {
      res.status(404).json("User doesn't exist");
    }
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    if (req.params.id) {
      await User.destroy({
        where: { id: req.params.id },
      });
      res.json("User deleted id: " + req.params.id);
    }
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

const userLogin = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.headers.email,
      },
    });
    if (user != null) {
      const checkedPass = await passChecker(
        req.headers.password,
        user.password,
      );
      if (checkedPass) {
        const token = tokenGenerator({ id: user.id, role: user.role });
        user.isLogged = true;
        await user.save();
        res.json("Your user token is " + token);
      } else {
        res.status(404).json("Password or email wrong");
      }
    } else {
      res.status(404).json("Password or email wrong");
    }
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};


const userLogout = async (req, res) => {
  try {
    const token = req.headers.token;
    const decoded = tokenChecker(token, process.env.JWT_SECRET);
    const user = await User.findByPk(decoded.id);

    if (user.isLogged == true) {
      user.isLogged = false;
      await user.save();
      res.json('Loggout success');
    } else {
      res.json('You are already logged');
    }
  } catch (error) {
    console.log(error);
    res.json(error);
  }
}

export { getUser, postUser, updateUser, deleteUser, userLogin, userLogout };
