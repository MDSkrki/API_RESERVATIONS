import { Sequelize } from "sequelize";

try{
    const connection = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.PASSWORD, {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
    });
    await connection.authenticate();
    console.log('Connection has been established successfully.')
}catch(error){
    console.log('Unable to connect to the database', error)
}