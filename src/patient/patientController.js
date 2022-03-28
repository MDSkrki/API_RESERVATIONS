import { Patient, User } from "../shared/models.js";
import { hasher, passChecker, tokenChecker, tokenGenerator } from "../shared/services.js";

const patientLogin = async (req, res) => {
  try {
    const patient = await Patient.findOne({
      where: {
        email: req.headers.email,
      },
    });
    if (patient != null) {
      const checkedPass = await passChecker(
        req.headers.password,
        patient.password
      );
      if (checkedPass) {
        const token = tokenGenerator({ id: patient.id, role: patient.role });
        patient.isLogged = true
        await patient.save()
        res.json("Your patient token is " + token);
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

const patientLogout = async (req, res) => {
 
 try{
  const token = req.headers.token;
  const decoded = tokenChecker(token, process.env.JWT_SECRET)
  const patient = await Patient.findByPk(decoded.id);

  if(patient.isLogged==true){
    patient.isLogged = false;
    await patient.save();
    res.json('Loggout success')
  }else{
    res.json('You are already logged')
  }
 }catch(error){
   console.log(error)
 }
  
}

const getPatient = async (req, res) => {
  try {
    const queryPatient = {};
    if (req.query.id) queryPatient.id = req.query.id;
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
    res.json(await Patient.findAll({ where: queryPatient, include: {model: User}}));
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};
const postPatient = async (req, res) => {
  try {
    const createUser = await User.create({
      name: req.body.name,
      lastname: req.body.lastname,
      email: req.body.email,
      password: await hasher(req.body.password),
      phone_number: req.body.phone_number,
      role: 'Patient'
    });
    const createPatient = await Patient.create({
      sex: req.body.sex,
      birth_date: req.body.birth_date,
      age: req.body.age,
      dni: req.body.dni,
      allergies: req.body.allergies,
      address: req.body.address,
      idUser: createUser.id
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
