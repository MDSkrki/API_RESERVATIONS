import {Doctor, User} from "../shared/models.js";

//Get Users by all fields with User model.
const getDoctor = async (req, res) => {
  try {
    const queryDoctor = {};
    if (req.query.id) queryDoctor.id = req.query.id;
    if (req.query.specialty) queryDoctor.specialty = req.query.specialty;
    if (req.query.schedule) queryDoctor.schedule = req.query.schedule;
    res.json(await Doctor.findAll({ where: queryDoctor, include: [{model: User}] }));
  } catch (error) {
    res.json(error);
  }
};

// Post user
const postDoctor = async (req, res) => {
  try {
    const createDoctor = await Doctor.create({
      specialty: req.body.specialty,
      schedule: req.body.schedule,
      FK_idUser: req.body.FK_idUser,
    });
    res.json(createDoctor);
  } catch (error) {
    console.log(error);
  }
};

// PATCH/UPDATE USER
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

export { getDoctor, postDoctor, updateDoctor, deleteDoctor };
