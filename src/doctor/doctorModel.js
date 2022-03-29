import { DataTypes, Model } from "sequelize";
import { connection } from "../../config/mysqlDB.js";

class Doctor extends Model { }

const doctorSchema = {
  specialty: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  schedule: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  idUser: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
};

Doctor.init(doctorSchema, {
  // Other model options go here
  sequelize: connection,
  modelName: "Doctor",
});

export default Doctor;
