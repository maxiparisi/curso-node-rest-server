const { response } = require('express');

const usuariosGet = (req, res = response) => {
    res.json({msg: 'get api controlador'})
}

const usuariosPost = (req, res = response) => {

    const {nombre, edad} = req.body; //desestructuro body

    res.status(201).json({
        msg: 'post example',
        nombre,
        edad})
}

const usuariosPut = (req, res = response) => {
    res.json({msg: 'put example'})
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