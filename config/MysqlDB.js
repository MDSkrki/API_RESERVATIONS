import { Sequelize } from "sequelize";

const connection = new Sequelize('api_reservations', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

try{
    await connection.authenticate();
    console.log('Connection has been established successfully.')
}catch(error){
    console.log('Unable to connect to the database', error)
}

export default connection;