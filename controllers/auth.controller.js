const bcryptjs = require('bcryptjs');
const { response } = require('express');
const { json } = require('express/lib/response');
const res = require('express/lib/response');
const { googleVerify } = require('../helpers/google-verify');
const { generarJWT } = require('../helpers/jwt-generator');
const Usuario = require('../models/usuario');


const login = async(req, res = response) => {

    try {
     

        const { correo, password } = req.body;

        //verificar q existe el email y que el usuario este activo
        const usuario = await Usuario.findOne({ correo, estado:true })
        if ( !usuario ) {
            return res.status(400).json({
                msg: 'Usuario o password incorrecto - usuario no existe'
            });
        }

        //verificar contraseña
        const validPassword = bcryptjs.compareSync(password, usuario.password);  //funcion sincrona, compara contra la contraseña encriptada en base
        if ( !validPassword ) {
            return res.status(400).json( {
                msg: 'Usuario o password incorrecto - pass incorrecta'
            });
        }

        //generar JWT
        const token = await generarJWT( usuario.id );
        
        res.json({ 
            usuario,
            token
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Contactese con el administrador'
        });
    }

}

const googleSignIn = async(req, res = response) => {
    
    const { id_token } = req.body;

    try {

        const {nombre, img, correo} = await googleVerify(id_token);
        console.log(googleUser);
        
        res.json({    
            msg: 'Todo bien',
            id_token
        })
    } catch (error) {
        json.status(400).json({
            ok: false,
            msg: 'El token no se pudo verificar'
        })
    }
}

module.exports = { login, googleSignIn }