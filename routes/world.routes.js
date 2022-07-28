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

module.exports = router;
