const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const World = require("../models/World.model")

router.post("/world", (req, res, next)=>{
    const {nombre, breveDescripcion, rpgSistem} = req.body;

    World.create({nombre, breveDescripcion, rpgSistem})
    .then((newWorld) => res.json(newWorld))
    .catch((err) => res.json(err))
});