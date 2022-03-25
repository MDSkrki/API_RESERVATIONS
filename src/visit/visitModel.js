import { DataTypes, Model } from "sequelize";
import {connection} from "../../config/mysqlDB.js";

class Visit extends Model {}

const visitSchema = {
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    state: {
        type: DataTypes.STRING,
    },
    FK_idDoctor: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    FK_idPatient: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}

Visit.init(visitSchema, {
    sequelize: connection,
    modelName: 'Visit',
});
await Visit.sync();

export default Visit;