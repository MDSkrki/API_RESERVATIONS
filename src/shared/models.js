import Doctor from "../doctor/doctorModel.js";
import User from "../user/userModel.js";
import Patient from "../patient/patientModel.js";
import Visit from "../visit/visitModel.js";

User.hasOne(Patient, {foreignKey: 'idUser'})
User.hasOne(Doctor, {foreignKey: 'idUser'})
Patient.belongsTo(User, {foreignKey: 'idUser'})
Doctor.belongsTo(User, {foreignKey: 'idUser'})
// Association n:m between Patient and Doctors through Visits
Doctor.belongsToMany(Patient, {through: {model: Visit, unique: false}, foreignKey: "idDoctor"});
Patient.belongsToMany(Doctor, {through: {model: Visit, unique: false}, foreignKey: "idPatient"});

Visit.belongsTo(Doctor, {foreignKey: 'idDoctor'});
Visit.belongsTo(Patient, {foreignKey: 'idPatient'});

//Loading the models together with associations before use through API
await User.sync()
await Doctor.sync()
await Patient.sync()
await Visit.sync()

export { User, Doctor, Visit, Patient };
