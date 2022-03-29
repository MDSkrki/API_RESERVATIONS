import { Sequelize, DataTypes, Model } from "sequelize";
import { connection } from "../../config/mysqlDB.js";

class Doctor extends Model {}

const doctorSchema = {
  // Model attributes are defined here
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
  sequelize: connection, // We need to pass the connection instance
  modelName: "Doctor", // We need to choose the model name
});

export default Doctor;
