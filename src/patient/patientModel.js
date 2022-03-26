import { Model, DataTypes } from "sequelize";
import { connection } from "../../config/mysqlDB.js";

class Patient extends Model {}

const patientSchema = {
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
    idUser: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }, 
}

Patient.init(patientSchema, {
    sequelize: connection,
    modelName: 'Patient',
});

Patient.sync();
export default Patient;