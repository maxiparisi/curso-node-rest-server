const { Router} = require('express');
const { check } = require('express-validator');
const { usuariosGet, usuariosPost, usuariosPut, usuariosDelete, usuariosPatch } = require('../controllers/usuario.controller');
const { validarCampos } = require('../middlewares/validar-campos');
const Role = require('../models/role');

const router = Router();


router.get('/', usuariosGet)

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'La contraseña es obligatoria y debe tener al menos 6 caracteres').isLength({min: 6}),
    check('correo', 'El correo no es válido').isEmail(),
    // check('rol', 'No es un rol válido').isIn('ADMIN_ROLE', 'USER_ROLE'),
    check('rol').custom( async(rol = '') => {
        const existeRol = await Role.findOne({rol}); //que exista el rol en la base de datos en los documentos de roles
        if(!existeRol) {
            throw new Error(`El rol ${rol} no existe en la BBDD`);
        }
    }),
    validarCampos
] ,usuariosPost)

router.put('/:id', usuariosPut)

router.delete('/', usuariosDelete)

router.patch('/', usuariosPatch)

module.exports = router;