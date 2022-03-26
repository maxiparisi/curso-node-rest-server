
const express = require('express')
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/users'

        //Middlewares
        this.middlewares();

        this.routes();
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