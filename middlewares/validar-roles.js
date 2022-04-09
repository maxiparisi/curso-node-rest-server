const { response } = require("express")

const esAdminRole = (req, res = response, next) => {

    if (!req.usuario) {
        return res.status(500).json({
            msg: 'Se quiere validar el rol sin haber obtenido los datos del usuario desde el token'
        })
    }

    const { rol, nombre } = req.usuario;

    if (rol !== 'ADMIN_ROLE') {
        return res.status(401).json({
            msg: `${nombre} no es administrador`
        })
    }

    next();

}

const tieneRole = ( ...roles) => {   //middleware que recibe argumentos personalizados

    return ( req, res = response, next ) => { //retorno una funcion con los argumentos de un middleware

        if (!req.usuario) {
            return res.status(500).json({
                msg: 'Se quiere validar el rol sin haber obtenido los datos del usuario desde el token'
            })
        }

        if ( !roles.includes(req.usuario.rol)) {
            return res.status(401).json({
                msg: `El servicio requiere uno de estos roles ${roles}`
            })
        }

        next();

    }

}

module.exports = {
    esAdminRole,
    tieneRole
}