const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
     img: {
        type: String
    },
    rol: {
        type: String,
        required: true,
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
})

//no puede ser funcion de flecha porque necesito apuntar al this. Una funcion normal como esta tiene referencia a la instancia
UsuarioSchema.methods.toJSON = function() {
    const { __v, password, ...restoAtributosUsuario } = this.toObject();
    return restoAtributosUsuario;
}

module.exports = model('Usuarios', UsuarioSchema);