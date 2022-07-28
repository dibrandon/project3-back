const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const World = require("../models/Worlds.model")

router.post("/world", (req, res, next)=>{
    const {nombre, breveDescripcion, rpgSystem} = req.body;

    World.create({nombre, breveDescripcion, rpgSystem})
    .then((response) => res.json(response))
    .catch((err) => res.json(err))
});

//  GET /api/worlds -  Retrieves all of the projects
 router.get('/world', (req, res, next) => {
 	World.find().populate('personajes').then((allworlds) => res.json(allworlds)).catch((err) => res.json(err));
 });

// router.get("/world", (req, res, next) => {
//     World.find()
//       .then((response) => res.json(response))
//       .catch((err) => res.json(err));
//   });
module.exports = router;
