const validaCampos = require('../middlewares/validar-campos');
const validaJWT = require('../middlewares/validar-jwt');
const validaRoles = require('../middlewares/validar-roles');

module.exports = {
    ...validaCampos,   //operador spread, sirve para indicar q exporto todo a lo que hace referencia validaCampos, o sea todas sus funciones
    ...validaJWT,
    ...validaRoles
}