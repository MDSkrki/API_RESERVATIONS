import { Patient, User } from "../shared/models.js";

const getPatient = async (req, res) => {
  try {
    const queryPatient = {};
    if (req.query.id) queryPatient.id = req.query.id;
    if (req.query.sex) queryPatient.sex = req.query.sex;
    if (req.query.birth_date) queryPatient.birth_date = req.query.birth_date;
    if (req.query.age) queryPatient.age = req.query.age;
    if (req.query.dni) queryPatient.dni = req.query.dni;
    if (req.query.allergies) queryPatient.allergies = req.query.allergies;
    if (req.query.address) queryPatient.address = req.query.address;
    res.json(
      await Patient.findAll({ where: queryPatient, include: [{ model: User }] })
    );
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};
const postPatient = async (req, res) => {
  try {
    const createPatient = await Patient.create({
      sex: req.body.sex,
      birth_date: req.body.birth_date,
      age: req.body.age,
      dni: req.body.dni,
      allergies: req.body.allergies,
      address: req.body.address,
      idUser: req.body.idUser,
    });
    res.json(createPatient);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

const updatePatient = async (req, res) => {
  try {
    if (await Patient.findByPk(req.params.id)) {
      await Patient.update(
        {
          sex: req.body.sex,
          birth_date: req.body.birth_date,
          age: req.body.age,
          dni: req.body.dni,
          allergies: req.body.allergies,
          address: req.body.address
        },
        { where: { id: req.params.id } }
      );
      res.status(200).json("Updated id = " + req.params.id);
    } else {
      res.status(404).json("Patient doesn't exist");
    }
  } catch (error) {
    res.json(error);
  }
};

const deletePatient = async (req, res) => {
  try {
    if (req.params.id) {
      await Patient.destroy({
        where: { id: req.params.id },
      });
      res.json("Patient deleted id: " + req.params.id);
    }
  } catch (error) {
    res.json(error);
  }
};

export { getPatient, postPatient, updatePatient, deletePatient };
