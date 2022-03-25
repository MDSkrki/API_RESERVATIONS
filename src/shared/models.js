import Doctor from "../doctor/doctorModel.js";
import User from "../users/userModel.js";

//Association 1:1 User with doctor
User.hasOne(Doctor, { foreignKey: "FK_idUser" }),
Doctor.hasOne(User, { foreignKey: "id" });

export {User, Doctor};
