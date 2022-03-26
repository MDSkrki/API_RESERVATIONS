import Doctor from "../doctor/doctorModel.js";
import User from "../users/userModel.js";
import Patient from '../patient/patientModel.js';
import Visit from '../visit/visitModel.js';

//Association 1:1 User with doctor
User.hasOne(Doctor, { foreignKey: "idUser" }),
Doctor.hasOne(User, { foreignKey: "id" });

//Association 1:1 User with Patient
User.hasOne(Patient, {foreignKey: "idUser"});
Patient.hasOne(User, {foreignKey: "id"});

//Association 1:n Visit with Patient
Patient.hasMany(Visit, {foreignKey: "idPatient"});
Visit.hasOne(Patient, {foreignKey: "id"});

//Assocation 1:n Visit with Doctor
Doctor.hasMany(Visit, {foreignKey: "idDoctor"});
Visit.hasOne(Doctor, {foreignKey: "id"});

export {User, Doctor, Visit, Patient};
