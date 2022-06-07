const express = require("express");
const router = express.Router();
const productoModel = require("../models/productos");

//Crear un producto
router.post("/productos", (req, res) => {
    const producto = productoModel(req.body);
    producto.save()
        .then((data) => res.json(data))
        .catch((error) => res.json ({mensaje: error}));
});

//Leer todos los productos
router.get("/productos", (req, res) => {
    productoModel.find()
        .then((data) => res.json(data))
        .catch((error) => res.json ({mensaje: error}));
});

module.exports = router;