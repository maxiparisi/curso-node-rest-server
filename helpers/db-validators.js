const Role = require('../models/role');
const Usuario = require('../models/usuario');

const esRolValido = async(rol = '') => {
    const existeRol = await Role.findOne({rol}); //que exista el rol en la base de datos en los documentos de roles
    if(!existeRol) {
        throw new Error(`El rol ${rol} no es un rol permitido`);
    }
}

const existeEmail = async(correo = '') => {
    const existeEmail = await Usuario.findOne({correo});
    if ( existeEmail ) {
        throw new Error(`Email ya registrado`);
    }
}

const existeUsuarioById = async(id) => {
    const existeUsuario = await Usuario.findById(id);
    if ( !existeUsuario ) {
        throw new Error(`El usuario con id ${id} no existe`);
    }
}

module.exports = { esRolValido, existeEmail, existeUsuarioById };