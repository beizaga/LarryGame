const express = require("express");
const router = express.Router();
const juegos3dModel = require("../models/juegos3d");

//Crear un producto
router.post("/juegos3d", (req, res) => {
    const juegos3d = juegos3dModel(req.body);
    juegos3d.save()
        .then((data) => res.json(data))
        .catch((error) => res.json ({mensaje: error}));
});

//Leer todos los juegos3d
router.get("/juegos3d", (req, res) => {
    juegos3dModel.find()
        .then((data) => res.json(data))
        .catch((error) => res.json ({mensaje: error}));
});

module.exports = router;