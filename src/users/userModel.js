import { Sequelize, DataTypes, Model } from "sequelize";
import { connection } from "../../config/mysqlDB.js"
import Doctor from "../doctor/doctorModel.js";

class User extends Model { };

const userSchema = {
    // Model attributes are defined here
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "patient",
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: false
    }
}

User.init(userSchema, {
    // Other model options go here
    sequelize: connection, // We need to pass the connection instance
    modelName: 'User' // We need to choose the model name
});


await User.sync();
//Association with doctor
User.hasOne(Doctor, { foreignKey: "FK_idUser" })
Doctor.hasOne(User, { foreignKey: "id" })

export default User;