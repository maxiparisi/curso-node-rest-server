
const express = require('express')
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //Middlewares
        this.middlewares();

        this.routes();
    }

    middlewares() {
        //directorio publico
        this.app.use( express.static('public'));
        this.app.use(cors());
    }

    routes() {
        this.app.get('/test-api', (req, res) => {
            res.json({msg: 'get example'})
          })

        this.app.post('/test-api', (req, res) => {
        res.status(201).json({msg: 'post example'})
        })

        this.app.put('/test-api', (req, res) => {
            res.json({msg: 'put example'})
          })

        this.app.delete('/test-api', (req, res) => {
        res.json({msg: 'delete example'})
        })

        this.app.patch('/test-api', (req, res) => {
            res.json({msg: 'patch example'})
        })


    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ', this.port)
        })
    }

}

module.exports = Server;