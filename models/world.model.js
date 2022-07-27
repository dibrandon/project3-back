const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const worldSchema = new Schema({
    nombre: { type: String, unique: true, required: true },
    breveDescripcion: { type: String, required: true },
    descripcionFull: String,
    rpgSystem: String,
    personajes: { type: Schema.Types.ObjectId, ref: "Character" },
},
{
 timestamps: true,
});

module.exports = model("World", worldSchema);
