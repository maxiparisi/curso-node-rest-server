const { response } = require('express');

const usuariosGet = (req, res = response) => {
    const {nombre = 'No name', page = 1, limit } = req.query;
    res.json({
        msg: 'get api controlador',
        nombre,
        page,
        limit
    })
}

const usuariosPost = (req, res = response) => {

    const {nombre, edad} = req.body; //desestructuro body

    res.status(201).json({
        msg: 'post example',
        nombre,
        edad})
}

const usuariosPut = (req, res = response) => {
    const id = req.params.id;
    res.json({
        msg: 'put example',
        id
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