const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const characterSchema = new Schema({
    nombre: { type: String, unique: true, required: true },
    edad: String,
    religion: String,
    genero: String,
    profesionPadres: String,
    profesionAventurero: String,
    origen: String,
    contenido: String,
    infoLateral: String,

});

module.exports = model("User", characterSchema);



