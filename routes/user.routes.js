const { Router} = require('express');
const { check } = require('express-validator');
const { usuariosGet, usuariosPost, usuariosPut, usuariosDelete, usuariosPatch } = require('../controllers/usuario.controller');

const router = Router();


router.get('/', usuariosGet)

router.post('/', [
    check('correo', 'El correo no es válido').isEmail(),
] ,usuariosPost)

router.put('/:id', usuariosPut)

router.delete('/', usuariosDelete)

router.patch('/', usuariosPatch)

module.exports = router;