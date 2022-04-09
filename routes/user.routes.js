const { Router} = require('express');
const { check } = require('express-validator');
const { usuariosGet, usuariosPost, usuariosPut, usuariosDelete, usuariosPatch } = require('../controllers/usuario.controller');
const { esRolValido, existeEmail, existeUsuarioById } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { esAdminRole, tieneRole } = require('../middlewares/validar-roles');

const router = Router();


router.get('/', usuariosGet)

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'La contraseña es obligatoria y debe tener al menos 6 caracteres').isLength({min: 6}),
    check('correo', 'El correo no es válido').isEmail(),
    check('correo').custom( existeEmail ),
    // check('rol', 'No es un rol válido').isIn('ADMIN_ROLE', 'USER_ROLE'),
    //check('rol').custom( (rol) => esRolValido(rol) ), // no se especifica  ya q se puede simplificar como quedó abajo, pasa como parametro el unico parametro q envia el custom, o sea el rol
    check('rol').custom( esRolValido ), 
    validarCampos
] ,usuariosPost)

router.put('/:id', [
    check('id', 'No es un id válido').isMongoId(), //valida solo el formato de ids en mongo, NO que exista en mongo
    check('id').custom( existeUsuarioById ),
    check('rol').custom( esRolValido ),
    validarCampos
], usuariosPut)

router.delete('/:id', [
    validarJWT,
    //esAdminRole,
    tieneRole('ADMIN_ROLE', 'VENTAS_ROLE'),
    check('id', 'No es un id válido').isMongoId(), //valida solo el formato de ids en mongo, NO que exista en mongo
    check('id').custom( existeUsuarioById ),
    validarCampos
], usuariosDelete)

router.patch('/', usuariosPatch)

module.exports = router;