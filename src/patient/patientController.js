import { Patient, User, Visit, Doctor } from "../shared/models.js";
import { emailValidator, hasher, tokenChecker } from "../shared/services.js";

const getPatient = async (req, res) => {
  try {
    const decoded = tokenChecker(req.headers.token, process.env.JWT_SECRET);
    const queryPatient = {};
    queryPatient.id = decoded.id;
    if (req.query.name) queryPatient.name = req.query.name;
    if (req.query.lastname) queryPatient.lastname = req.query.lastname;
    if (req.query.email) queryPatient.email = req.query.email;
    if (req.query.sex) queryPatient.sex = req.query.sex;
    if (req.query.birth_date) queryPatient.birth_date = req.query.birth_date;
    if (req.query.age) queryPatient.age = req.query.age;
    if (req.query.dni) queryPatient.dni = req.query.dni;
    if (req.query.allergies) queryPatient.allergies = req.query.allergies;
    if (req.query.address) queryPatient.address = req.query.address;
    if (req.query.phone_number) queryUser.phone_number = req.query.phone_number;
    res.json(
      await Patient.findAll({ where: queryPatient, include: { model: User }, })
    );
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};
//---------------------- Project query ------------------------------------------
//get visit only with the token user, state pendins or anything else
const getVisit = async (req, res) => {
  try {
    const decoded = tokenChecker(req.headers.token, process.env.JWT_SECRET);
    const queryVisit = {};
    if (req.query.date) queryVisit.date = req.query.date;
    if (req.query.state) queryVisit.state = req.query.state;
    if (req.query.idDoctor) queryVisit.idDoctor = req.query.idDoctor;
    queryVisit.idPatient = decoded.id;
    if (decoded) {
      res.json(
        await Visit.findAll({
          where: queryVisit,
          include: [
            { model: Doctor },
            /*just to see if works ->*/ { model: Patient },
          ],
        })
      );
    } else {
      res.status(403).json("token not valid");
    }
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};
const postVisit = async (req, res) => {
  try {
    const decoded = tokenChecker(req.headers.token, process.env.JWT_SECRET);
    const createVisit = await Visit.create({
      date: req.body.date,
      description: req.body.description,
      state: 'pending',
      idDoctor: req.body.idDoctor,
      idPatient: decoded.id,
    });
    res.json(createVisit);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

const cancelVisit = async (req, res) => {
  try {
    const decoded = tokenChecker(req.headers.token, process.env.JWT_SECRET);
    if (decoded) {
      const visitFound = await Visit.findByPk(req.params.id);
      if (visitFound.state === "finished" || visitFound.state === "cancelled") {
        throw Error("This visit is finished or cancelled");
      }
      await Visit.update(
        {
          state: "cancelled",
        },
        { where: { idPatient: decoded.id, id: req.params.id }, }
      );
      res.status(200).json("Cancelled Visit id = " + req.params.id);
    } else {
      res.status(404).json("Patient doesn't exist");
    }
  } catch (error) {
    console.log(error.message);
    res.json(error.message);
  }
};

const postPatient = async (req, res) => {
  try {
    const createUser = await User.create({
      name: req.body.name,
      lastname: req.body.lastname,
      email: emailValidator(req.body.email),
      password: await hasher(req.body.password),
      phone_number: req.body.phone_number,
      role: "Patient",
    });
    const createPatient = await Patient.create({
      sex: req.body.sex,
      birth_date: req.body.birth_date,
      age: req.body.age,
      dni: req.body.dni,
      allergies: req.body.allergies,
      address: req.body.address,
      idUser: createUser.id,
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
          address: req.body.address,
        },
        { where: { id: req.params.id }, },
      );
      res.status(200).json("Updated id = " + req.params.id);
    } else {
      res.status(404).json("Patient doesn't exist");
    }
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

const deletePatient = async (req, res) => {
  try {
    const decoded = tokenChecker(req.headers.token, process.env.JWT_SECRET);
    await User.destroy({
      where: { id: decoded.id },
    });
    res.json('Your profile has been deleted successfully!!');
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

export {
  getPatient,
  postPatient,
  updatePatient,
  deletePatient,
  getVisit,
  cancelVisit,
  postVisit
};
