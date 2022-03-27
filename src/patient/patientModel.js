import { Model, DataTypes } from "sequelize";
import { connection } from "../../config/mysqlDB.js";

class Patient extends Model { }

const patientSchema = {
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
        defaultValue: "patient",
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sex: {
        type: DataTypes.STRING,
    },
    birth_date: {
        type: DataTypes.STRING,
    },
    age: {
        type: DataTypes.INTEGER,
    },
    dni: {
        type: DataTypes.STRING,
    },
    allergies: {
        type: DataTypes.STRING,
    },
    address: {
        type: DataTypes.STRING,
    },
}

Patient.init(patientSchema, {
    sequelize: connection,
    modelName: 'Patient',
});

export default Patient;