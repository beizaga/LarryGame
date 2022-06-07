const mongoose = require("mongoose");

const productoModel = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion : {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Producto", productoModel);