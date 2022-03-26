import Doctor from "../doctor/doctorModel.js";
import User from "../users/userModel.js";
import Patient from '../patient/patientModel.js';
import Visit from '../visit/visitModel.js';

//Association 1:1 User with doctor
User.hasOne(Doctor, { foreignKey: "FK_idUser" }),
Doctor.hasOne(User, { foreignKey: "id" });

//Association 1:1 User with Patient
User.hasOne(Patient);
Patient.belongsTo(User);

//Association 1:n Visit with Patient
Patient.hasMany(Visit);
Visit.belongsTo(Patient);

//Assocation 1:n Visit with Doctor
Doctor.hasMany(Visit);
Visit.belongsTo(Doctor);

export {User, Doctor, Visit, Patient};
