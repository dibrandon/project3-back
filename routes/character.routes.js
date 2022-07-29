const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Character = require("../models/Character.model")

router.post("/character", (req, res, next)=>{
    const {nombre, edad, religion, genero, profesionPadres, profesionAventurero, origen, contenido, infoLateral} = req.body;

    Character.create({nombre, edad, religion, genero, profesionPadres, profesionAventurero, origen, contenido, infoLateral})
    .then((response) => res.json(response))
    .catch((err) => res.json(err))
});

//  GET /api/worlds -  Retrieves all of the projects
 router.get('/character', (req, res, next) => {
    Character.find().then((allCharacter) => res.json(allCharacter)).catch((err) => res.json(err));
 });


module.exports = router;
