import { DataTypes, Model } from "sequelize";
import { connection } from "../../config/mysqlDB.js";


class Visit extends Model { }

const visitSchema = {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    state: {
        type: DataTypes.STRING,
    },
    idDoctor: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false,
    },
    idPatient: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false,
    },
}

Visit.init(visitSchema, {
    sequelize: connection,
    modelName: 'Visit',
});

export default Visit;