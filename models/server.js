
const express = require('express')
const cors = require('cors');

const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/users'

        //Conectar a BBDD
        this.conectarDB();

        //Middlewares
        this.middlewares();

        this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }

    middlewares() {
        //directorio publico
        this.app.use( express.static('public'));

        //CORS
        this.app.use(cors());

        //lectura y parseo de bodys
        this.app.use( express.json());
    }

    routes() {

        this.app.use(this.usuariosPath, require('../routes/user.routes.js'))

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ', this.port)
        })
    }

}

module.exports = Server;