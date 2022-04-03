const { response } = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');


const usuariosGet = (req, res = response) => {
    const {nombre = 'No name', page = 1, limit } = req.query;
    res.json({
        msg: 'get api controlador',
        nombre,
        page,
        limit
    })
}

const usuariosPost = async(req, res = response) => {

    const { nombre, correo, password, rol } = req.body; //desestructuro body
    //const { google, ...resto} = re.body; //resto va a tener todos los atributos menos google
    const usuario = new Usuario({nombre, correo, password, rol});

    //encriptar pass
    const salt = bcryptjs.genSaltSync(10); //dificultad de encriptado
    usuario.password = bcryptjs.hashSync(password, salt);

    //guardar en db
    await usuario.save();
    res.status(201).json({
        msg: 'post example',
        usuario})
}

const usuariosPut = async (req, res = response) => {
    const id = req.params.id;
    const { password, google, correo, ...resto } = req.body;

    //si quiere actualizar pass
    if ( password ) {
        //encriptar pass
        const salt = bcryptjs.genSaltSync(10); //dificultad de encriptado
        resto.password = bcryptjs.hashSync(password, salt);
    }

    const usuario = await Usuario.findByIdAndUpdate( id, resto );

    res.json({
        msg: 'put example',
        usuario
        })
}

const usuariosPatch = (req, res = response) => {
    res.json({msg: 'patch example'})
}

const usuariosDelete = (req, res = response) => {
    res.json({msg: 'delete example'})
}

module.exports = { 
    usuariosGet ,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete

}