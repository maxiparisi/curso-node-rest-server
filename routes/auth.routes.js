const { Router} = require('express');
const { check } = require('express-validator');
const { login, googleSignIn } = require('../controllers/auth.controller');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();


router.post('/login', [
check('correo', 'Formato inválido de correo').isEmail(),
check('password', 'La password es obligatoria').not().isEmpty(),
validarCampos
],
login);

router.post('/login-google', [
    check('id_token', 'id_token es obligatorio').not().isEmpty(),
    validarCampos
    ],
    googleSignIn);

module.exports = router;