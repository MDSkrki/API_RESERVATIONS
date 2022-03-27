import Doctor from "../doctor/doctorModel.js";
import User from "../users/userModel.js";
import Patient from "../patient/patientModel.js";
import Visit from "../visit/visitModel.js";

// Association n:m between Patient and Doctors through Visits
Doctor.belongsToMany(Patient, {through: Visit, foreignKey: "idDoctor" });
Patient.belongsToMany(Doctor, { through: Visit, foreignKey: "idPatient"});

Visit.hasOne(Doctor, {foreignKey: 'id'});
Visit.hasOne(Patient, {foreignKey: 'id'});

//Loading the models together with associations before use through API
await Doctor.sync()
await Patient.sync()
await Visit.sync()

export { User, Doctor, Visit, Patient };
