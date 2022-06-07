const express = require("express");
const router = express.Router();
const userModel = require("../models/usuarios");

//Crear un usuario
router.post("/usuarios", (req, res) => {
    const user = userModel(req.body);
    user.save()
        .then((data) => res.json(data))
        .catch((error) => res.json ({mensaje: error}));
});

//Leer todos los usuarios
router.get("/usuarios", (req, res) => {
    userModel.find()
        .then((data) => res.json(data))
        .catch((error) => res.json ({mensaje: error}));
});

//Buscar un usuario por id
router.get("/usuarios/:id", (req, res) => {
    const {id} = req.params;
    userModel.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json ({mensaje: error}));
});

//Actualizar datos de un usuario
router.put("/usuarios/:id", (req, res) => {
    const {id} = req.params;
    const {nombre, edad, correo} = req.body;
    userModel
        .updateOne({_id : id}, {$set : {nombre, edad, correo}})
        .then((data) => res.json(data))
        .catch((error) => res.json ({mensaje: error}));

});

//Eliminar un usuario
router.delete("/usuarios/:id", (req, res) => {
    const {id} = req.params;
    userModel.deleteOne({_id : id})
        .then((data) => res.json(data))
        .catch((error) => res.json ({mensaje: error}));
});

module.exports = router;