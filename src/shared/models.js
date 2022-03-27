import Doctor from "../doctor/doctorModel.js";
import User from "../users/userModel.js";
import Patient from "../patient/patientModel.js";
import Visit from "../visit/visitModel.js";

//Association 1:1 User with doctor
//User.hasOne(Doctor, { foreignKey: "idUser" });

console.log('patata')


//Association 1:n Visit with Patient

Doctor.belongsToMany(Patient, {through: Visit, foreignKey: "idDoctor" });
Patient.belongsToMany(Doctor, { through: Visit, foreignKey: "idPatient"});


Doctor.belongsTo(User, { foreignKey: "idUser" });
//Assocation 1:n Visit with Doctor

//Doctor.hasMany(Visit, { foreignKey: "idDoctor" });

//Association 1:1 User with Patient
Patient.belongsTo(User, { foreignKey: "idUser" });

await User.sync()
await Doctor.sync()
await Patient.sync()
await Visit.sync()

export { User, Doctor, Visit, Patient };
