const jwt = require('jsonwebtoken');
const { response } = require('express');
const res = require('express/lib/response');
const Usuario = require('../models/usuario');

const validarJWT = async(req, res = response, next) => {

    const token = req.header('x-token');

    //no envia token
    if (!token) {
        return res.status(401).json({
            msg: 'No hay token en la petición'
        })
    }

    try {
        
        const payload = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
        const usuario = await Usuario.findById(payload.uid);
        
        //validamos q exista el usuario aun en db (caso de token valido pero que ya no existe en la base)
        if(!usuario) {
            return res.status(401).json({
                msg: 'token no valido - usuario no existe en db'
            })
        }

        //validasmos q el estado del  usuario sea activo estado = true
        if(!usuario.estado) {
            return res.status(401).json({
                msg: 'token no valido - usuario con estado false'
            })
        }

        req.usuario = usuario
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Token no válido'
        })
    }
}

module.exports = {
    validarJWT
}