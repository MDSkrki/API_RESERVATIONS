import { Sequelize, DataTypes, Model } from "sequelize";
import connection from "../../config/mysqlDB.js"

class User extends Model {};

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

export default User;