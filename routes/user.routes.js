const { Router} = require('express');
const { check } = require('express-validator');
const { usuariosGet, usuariosPost, usuariosPut, usuariosDelete, usuariosPatch } = require('../controllers/usuario.controller');

const router = Router();


router.get('/', usuariosGet)

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'La contraseña es obligatoria y debe tener al menos 6 caracteres').isLength({min: 6}),
    check('correo', 'El correo no es válido').isEmail(),
    check('rol', 'No es un rol válido').isIn('ADMIN_ROLE', 'USER_ROLE'),
] ,usuariosPost)

router.put('/:id', usuariosPut)

router.delete('/', usuariosDelete)

router.patch('/', usuariosPatch)

module.exports = router;