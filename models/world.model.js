const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const worldSchema = new Schema({
    nombre: { type: String, unique: true, required: true },
    breveDescripcion: { type: String, required: true },
    descripcionFull: String,
    rpgSistem: String,
    personajes: { type: Schema.Types.ObjectId, ref: "Character" },
});

module.exports = model("World", worldSchema);
