const { response } = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');


const usuariosGet = async(req, res = response) => {
    const { limite = 5, desde = 0 } = req.query;

    const query = { estado: true}

    //esto es para realizar en simultaneo dos invocaciones q no dependen una de otra
    const [total, usuarios] = await Promise.all([    //aplico desestructuracion de array, primer posicion se llamara total, segunda usuarios
        Usuario.countDocuments( query ),
        Usuario.find( query )
            .skip(desde)
            .limit(limite)
    ])

    res.json({ total, usuarios });
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
    res.status(201).json(usuario);
}

const usuariosPut = async (req, res = response) => {
    const id = req.params.id;
    const { _id, password, google, correo, ...resto } = req.body;

    //si quiere actualizar pass
    if ( password ) {
        //encriptar pass
        const salt = bcryptjs.genSaltSync(10); //dificultad de encriptado
        resto.password = bcryptjs.hashSync(password, salt);
    }

    const usuario = await Usuario.findByIdAndUpdate( id, resto );

    res.json(usuario);
}

const usuariosPatch = (req, res = response) => {
    res.json({msg: 'patch example'})
}

const usuariosDelete = async(req, res = response) => {
    const { id } = req.params;
    // const usuario = await Usuario.findByIdAndDelete(id); //ejemplo de borrado fisico
    const usuario = await Usuario.findByIdAndUpdate( id, { estado: false } );
    res.json(usuario);
}

module.exports = { 
    usuariosGet ,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete

}