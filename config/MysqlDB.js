import { Sequelize } from "sequelize";

try{
    const connection = new Sequelize('api_reservations', 'root', 'root', {
        host: 'localhost',
        dialect: 'mysql'
    });
    await connection.authenticate();
    console.log('Connection has been established successfully.')
}catch(error){
    console.log('Unable to connect to the database', error)
}