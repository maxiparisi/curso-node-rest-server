const mongoose = require('mongoose');

const dbConnection = async() => {

    try {
        
        await mongoose.connect(process.env.MONGODB_CONNECTION);

        console.log('Conneccion a la BBDD exitosa!!!')

    } catch (error) {
        console.log(error);
        throw new Error('Error al conectare con la BBDD');
    }
}

module.exports = {
    dbConnection
}