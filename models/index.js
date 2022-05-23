const Categoria = require('./categoria');
const Role = require('./role');
const Server = require('./server');
const Usuario = require('./usuario');


module.exports = {
    Categoria,
    Role,
    Server,
    Usuario
}

//otra forma de hacerlo
/*
module.exports = require('./categoria');
module.exports = require('./role');
module.exports = require('./server');
module.exports = require('./usuario');
*/