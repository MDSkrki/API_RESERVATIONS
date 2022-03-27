import {Doctor} from "../shared/models.js";
import { hasher, passChecker, tokenGenerator } from "../shared/services.js";


const doctorLogin = async (req, res) => {
  try {
    const doctor = await Doctor.findOne({
      where: {
        email : req.headers.email,
      }
    });
    const checkedPass = await passChecker(req.headers.password, doctor.password);
    if(checkedPass) {
      const token = tokenGenerator({id: doctor.id, role: doctor.role});
      console.log(token);
      res.json(token);
    };
  } catch (error) {
    console.log(error);
    res.json(error);
  }
}

//Get doctor by all fields with User model.
const getDoctor = async (req, res) => {
  try {
    const queryDoctor = {};
    if (req.query.id) queryDoctor.id = req.query.id;
    if (req.query.name) queryDoctor.name = req.query.name;
    if (req.query.lastname) queryDoctor.lastname = req.query.lastname;
    if (req.query.email) queryDoctor.email = req.query.email;
    if (req.query.phone_number) queryDoctor.phone_number = req.query.phone_number;
    if (req.query.specialty) queryDoctor.specialty = req.query.specialty;
    if (req.query.schedule) queryDoctor.schedule = req.query.schedule;
    res.json(await Doctor.findAll({ where: queryDoctor}));
  } catch (error) {
    res.json(error);
  }
};

// Post doctor
const postDoctor = async (req, res) => {
  try {
    const createDoctor = await Doctor.create({
      name: req.body.name,
      lastname: req.body.lastname,
      email: req.body.email,
      password: await hasher(req.body.password),
      phone_number: req.body.phone_number,
      specialty: req.body.specialty,
      schedule: req.body.schedule,
    });
    res.json(createDoctor);
  } catch (error) {
    console.log(error);
    res.json(error)
  }
};

// Patch/Put doctor
const updateDoctor = async (req, res) => {
  try {
    if (await Doctor.findByPk(req.params.id)) {
      await Doctor.update(
        {
          specialty: req.body.specialty,
          schedule: req.body.schedule,
        },
        { where: { id: req.params.id } }
      );
      res.status(200).json("Updated id = " + req.params.id);
    } else {
      res.status(404).json("Doctor doesn't exist");
    }
  } catch (error) {
    res.json(error);
  }
};

const deleteDoctor = async (req, res) => {
  try {
    if (req.params.id) {
      await Doctor.destroy({
        where: { id: req.params.id },
      });
      res.json("Doctor deleted id: " + req.params.id);
    }
  } catch (error) {
    res.json(error);
  }
};

export { getDoctor, postDoctor, updateDoctor, deleteDoctor, doctorLogin };
