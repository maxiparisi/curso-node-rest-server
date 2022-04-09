const jwt = require('jsonwebtoken');

const generarJWT = ( uid = '' ) => {

    return new Promise( (resolve, reject) => {
        //lo unico q voy a almacenar en el payload seria el uid
        const payload = { uid };

        jwt.sign(payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn: '4h'   //'365d'
        }, (err, token) => {

            if(err) {
                console.log(err);
                reject('No se pudo generar token')
            } else {
                resolve (token)
            }
        })
    })

}

module.exports = { generarJWT }