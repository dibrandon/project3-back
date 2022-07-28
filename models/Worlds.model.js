const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const worldSchema = new Schema({
    nombre: String, //{ type: String, unique: true, required: true },
    breveDescripcion: String,//{ type: String, required: true },
    descripcionFull: String,
    rpgSystem: String,
    personajes: { type: Schema.Types.ObjectId, ref: "Character" },
});

module.exports = model("World", worldSchema);

// ,
// {
//  timestamps: true,
// }
