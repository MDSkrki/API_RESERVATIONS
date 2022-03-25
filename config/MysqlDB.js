import { Sequelize } from "sequelize";
import env from 'dotenv'
env.config();

const connection = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.CLEARDB_DATABASE_URL,
    dialect: process.env.DB_DIALECT,
});

const dbConnection = async () => {
    try{
        await connection.authenticate();
        console.log('Connection has been established successfully.')
    }catch(error){
        console.log('Unable to connect to the database', error)
    }
}

export {dbConnection, connection } ;
