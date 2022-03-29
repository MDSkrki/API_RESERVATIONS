import { Model, DataTypes } from "sequelize";
import { connection } from "../../config/mysqlDB.js";

class Patient extends Model { }

const patientSchema = {
  sex: {
    type: DataTypes.STRING,
  },
  birth_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  dni: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  allergies: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  idUser: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
};

Patient.init(patientSchema, {
  sequelize: connection,
  modelName: "Patient",
});

export default Patient;