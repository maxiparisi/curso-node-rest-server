const { Router} = require('express');
const { check } = require('express-validator');
const { crearCategoria } = require('../controllers/categoria.controller');
const { validarJWT } = require('../middlewares');

const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

//obtener todas las categorias - publico
router.get('/', (req, res) => {
    res.json('get');
})

//obtener una categoria por id - publico
router.get('/:id', (req, res) => {
    res.json('get - id');
})

//crear categoria - cualquier perosna con un token valido
router.post('/', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos
    ], 
    crearCategoria)

//actualizar categoria - cualquier perosna con un token valido
router.put('/:id', (req, res) => {
    res.json('put');
})

//borrar una categoria - Admin
router.delete('/:id', (req, res) => {
    res.json('delete');
})

module.exports = router;