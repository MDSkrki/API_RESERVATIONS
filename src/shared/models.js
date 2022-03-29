import Doctor from "../doctor/doctorModel.js";
import User from "../user/userModel.js";
import Patient from "../patient/patientModel.js";
import Visit from "../visit/visitModel.js";

// Association 1:1 between User and Patient AND User and Doctor
User.hasOne(Patient, { foreignKey: 'idUser' });
User.hasOne(Doctor, { foreignKey: 'idUser' });

Patient.belongsTo(User, { foreignKey: 'idUser' }); // Contains foreign key
Doctor.belongsTo(User, { foreignKey: 'idUser' }); // Contains foreign key

// Association n:m between Patient and Doctors through Visits
Doctor.belongsToMany(Patient, { through: { model: Visit, unique: false }, foreignKey: "idDoctor" });
Patient.belongsToMany(Doctor, { through: { model: Visit, unique: false }, foreignKey: "idPatient" });

Visit.belongsTo(Doctor, { foreignKey: 'idDoctor' }); // Contains foreign key
Visit.belongsTo(Patient, { foreignKey: 'idPatient' }); // Contains foreign key

//Loading the models together with associations before use through API
await User.sync();
await Doctor.sync();
await Patient.sync();
await Visit.sync();

export { User, Doctor, Visit, Patient };
