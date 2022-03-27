import { Sequelize, DataTypes, Model } from "sequelize";
import { connection } from "../../config/mysqlDB.js";


class Doctor extends Model {}

const doctorSchema = {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "doctor",
  },
  phone_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  specialty: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  schedule: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

Doctor.init(doctorSchema, {
  // Other model options go here
  sequelize: connection, // We need to pass the connection instance
  modelName: "Doctor", // We need to choose the model name
});

export default Doctor;