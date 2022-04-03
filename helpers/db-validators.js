const Role = require('../models/role');

const esRolValido = async(rol = '') => {
    const existeRol = await Role.findOne({rol}); //que exista el rol en la base de datos en los documentos de roles
    if(!existeRol) {
        throw new Error(`El rol ${rol} no es un rol permitido`);
    }
}

module.exports = { esRolValido };