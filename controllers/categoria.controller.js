const { response } = require("express");
const { Categoria } = require("../models");   // es como hacer el import de index de la carpeta models, q hace referencia a todos los modelos

const crearCategoria = async(req, res = response) => {

    const nombre = req.body.nombre.toUpperCase();

    const categoriaDB = await Categoria.findOne( { nombre } );

    if( categoriaDB ) {
        return res.status(400).json({
            msg: `La categoria ${ categoriaDB.nombre }, ya existe`
        })
    }

    //armamos la data a guardar

    const data = {
        nombre,
        usuario: req.usuario._id
    }

    const categoria = new Categoria(data);

    await categoria.save();

    res.status(201).json(categoria);
}

// obtenerCategorias - paginado - total - populate (usuario)
// obtenerCategoria - populate (usuario)
// actualizarCategoria (que no existe la categoria por el nuevo nombre)
// borrarCategoria - estado:false

module.exports = {
    crearCategoria
}